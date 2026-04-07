import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[Your Name] | Software Engineer",
  description: "[Your Name] is a software engineer who specializes in building exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-navy text-slate antialiased selection:bg-accent/30 selection:text-accent`}>
        {children}
      </body>
    </html>
  );
}
