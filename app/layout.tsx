import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "𝑵𝒊𝒕𝒉𝒊𝒏 — 𝑻𝒉𝒆 𝑪𝒓𝒆𝒂𝒕𝒊𝒗𝒆 𝑯𝒐𝒓𝒊𝒛𝒐𝒏",
  description: "A modern portfolio crafted with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/canva-pink-yellow-gradient-portfolio-cover-document-kBzjGecjvDA.jpg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
