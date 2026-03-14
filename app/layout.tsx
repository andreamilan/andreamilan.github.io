import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andreamilan.github.io"),
  title: {
    default: "Andrea Milan",
    template: "%s | Andrea Milan"
  },
  description:
    "Product leader across consumer and marketplace products in Europe, currently leading product at TheFork.",
  openGraph: {
    title: "Andrea Milan",
    description:
      "A personal website about product leadership, marketplace growth, and building better consumer experiences.",
    url: "https://andreamilan.github.io",
    siteName: "Andrea Milan",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
