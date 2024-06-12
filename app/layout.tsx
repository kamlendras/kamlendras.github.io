import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "about me",
  description: "I am an independent software developer currently based in India. I am the creator of the open crypto exchange, video sharing platform fosstube and the online food ordering platform ueats. Most of my work is open source and publicly available on GitHub. If you happen to benefit from my OSS work, you can support me financially via Liberapay, Patreon or cryptocurrencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
