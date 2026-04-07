"use client";

import { DATA } from "@/lib/constants";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Socials() {
  const socials = [
    { icon: SiGithub, href: DATA.socials.github, name: "GitHub" },
    { icon: FaLinkedin, href: DATA.socials.linkedin, name: "LinkedIn" },
    { icon: SiX, href: DATA.socials.twitter, name: "Twitter" },
    { icon: SiInstagram, href: DATA.socials.instagram, name: "Instagram" },
  ];

  return (
    <div className="fixed bottom-0 right-0 z-10 hidden w-24 flex-col items-center lg:flex">
      <ul className="flex flex-col items-center space-y-6 after:mt-6 after:h-24 after:w-px after:bg-slate">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate transition-all hover:-translate-y-1 hover:text-accent"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
