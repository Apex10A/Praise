export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0 mx-auto text-center mb-8">
      <p>
        Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate hover:text-accent focus-visible:text-accent"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}
