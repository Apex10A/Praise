import type { CaseStudy } from "@/lib/types";

export const mutterboxCaseStudy = {
  slug: "mutterbox",
  overview:
    "MutterBox is a real-time messaging app where encryption happens entirely in the browser. Messages are scrambled on the device before they leave, the API stores ciphertext only, and only the intended recipient can read them — the server never receives a raw private key or plaintext body.",
  problem:
    "Most chat apps ask you to trust the platform with your messages. I wanted to understand E2EE from first principles — not by dropping in a crypto library, but by wiring up key generation, hybrid encryption, secure storage, and real-time delivery myself. The constraints were tight: use native Web Crypto APIs, keep the private key off the server, support login on a new browser via password-wrapped key backup, and still feel responsive while ciphertext is in flight.",
  approach:
    "I split the system into a crypto layer (`crypto.ts`), a key persistence layer (`storage.ts`), and a chat UI that encrypts before every send and decrypts after every fetch. Registration generates an RSA-OAEP key pair in-browser, wraps the private key with PBKDF2 + AES-GCM, and uploads only the public key and wrapped backup. Each message uses a one-time AES-GCM session key — RSA encrypts that key for the recipient (and for the sender, so sent history remains readable). REST handles auth and message persistence; WebSocket relays events for live updates with optimistic UI on the client.",
  architecture: [
    "User types plaintext in the chat UI — plaintext never touches the network.",
    "Client generates a one-time AES-GCM key and encrypts the message body.",
    "The AES key is RSA-OAEP encrypted for the recipient's public key (and the sender's, for self-decrypt).",
    "Ciphertext + encrypted keys + IV are POSTed to the API — opaque blobs only.",
    "Server stores and relays via WebSocket; it cannot decrypt without the private key.",
    "Recipient decrypts the session key with their RSA private key from IndexedDB, then decrypts the body.",
    "On login from a new browser, the client re-derives a wrapping key from the password and unwraps the private key into IndexedDB.",
  ],
  codeSnippet: {
    file: "src/lib/crypto.ts",
    language: "typescript",
    caption:
      "Hybrid encryption per message — AES-GCM for the body, RSA-OAEP for the one-time session key.",
    code: `export const encryptMessage = async (
  plaintext: string,
  recipientPublicKey: CryptoKey
) => {
  const aesKey = await crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encryptedContent = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    new TextEncoder().encode(plaintext)
  );

  const exportedAesKey = await crypto.subtle.exportKey("raw", aesKey);
  const encryptedKey = await crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    recipientPublicKey,
    exportedAesKey
  );

  return { encryptedContent, encryptedKey, iv };
};`,
  },
  decisions: [
    {
      title: "Crypto implementation",
      choice: "Native Web Crypto API — no third-party crypto libraries",
      rationale:
        "Web Crypto is built into modern browsers, audited at the platform level, and forces me to understand each step. A wrapper library would have been faster to ship but would hide the exact algorithms and key formats in use.",
    },
    {
      title: "Message encryption scheme",
      choice: "Hybrid RSA-OAEP (2048-bit) + AES-GCM",
      rationale:
        "RSA is secure for small payloads but too slow for long messages. A per-message AES session key keeps encryption fast while RSA-OAEP handles key exchange — the same pattern used in production E2EE systems, scaled down.",
    },
    {
      title: "Private key storage",
      choice: "IndexedDB locally, PBKDF2-wrapped backup on the server",
      rationale:
        "The raw private key never leaves the client. Wrapping it with a password-derived key lets users restore access on a new browser without uploading the private key in plaintext — only the wrapped blob and salt go to the server.",
    },
    {
      title: "Reading sent messages",
      choice: "Encrypt the session key for the sender's public key too",
      rationale:
        "The server stores ciphertext for both sides. Without `encryptedKeyForSelf`, the sender couldn't decrypt their own sent history after a refresh. Dual-wrapping the session key solved that without storing plaintext anywhere.",
    },
    {
      title: "Real-time delivery",
      choice: "WebSocket relay with optimistic UI",
      rationale:
        "Polling would work but feels sluggish in a chat app. WebSocket events push new ciphertext immediately; optimistic UI shows the message locally before the server acknowledges, then reconciles on failure.",
    },
    {
      title: "Backend trust boundary",
      choice: "Server as ciphertext store + public key directory only",
      rationale:
        "The API handles auth, stores wrapped keys and encrypted payloads, and relays events. It never decrypts messages. That keeps the security model honest — if the server is compromised, attackers get blobs, not readable chat history.",
    },
  ],
  outcomes: [
    "Server-side handlers operate on ciphertext only — no access to raw private keys or plaintext",
    "Full encrypt/decrypt pipeline runs in the browser using RSA-OAEP, AES-GCM, and PBKDF2",
    "Private keys restore on new devices via password-based unwrap, not key upload",
    "Sent message history remains readable by dual-encrypting session keys for sender and recipient",
    "WebSocket + optimistic UI keeps the chat responsive during network round-trips",
  ],
  limitations: [
    "No forward secrecy — session keys aren't ratcheted per message the way Signal's Double Ratchet works. A compromised long-lived private key affects all messages encrypted to it.",
    "No out-of-band key verification — the server is trusted for public key distribution. A compromised server could theoretically swap keys (classic key distribution risk).",
    "Web app trust model — users trust the served JavaScript bundle. A malicious deploy at the origin could exfiltrate keys; native apps with reproducible builds reduce this class of risk.",
    "Password strength directly protects the wrapped private key backup. Weak passwords make offline guessing easier.",
    "Clearing IndexedDB without a successful password unwrap loses the ability to decrypt past messages on that device.",
  ],
  lessonsLearned: [
    "E2EE is as much about key management as encryption — wrapping, unwrapping, and storage were harder than the AES/RSA calls themselves.",
    "Hybrid encryption is the practical default: asymmetric for key exchange, symmetric for payload speed.",
    "Building the decrypt path for sent messages early would have saved debugging time — dual key wrapping needs to be designed in, not bolted on.",
    "Documenting the security trade-offs honestly matters more than claiming 'unbreakable' — every E2EE system has trust assumptions.",
  ],
} satisfies CaseStudy;
