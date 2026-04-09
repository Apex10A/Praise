import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praise Afolabi",
  description: "Praise Afolabi is a Frontend engineer who specializes in building exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${gabarito.variable} ${gabarito.className} bg-navy text-slate antialiased selection:bg-accent/30 selection:text-accent`}>
        {children}
      </body>
    </html>
  );
}
