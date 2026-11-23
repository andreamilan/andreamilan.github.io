import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andreamilan.github.io"),
  title: {
    default: "Andrea Milan",
    template: "%s | Andrea Milan"
  },
  description:
    "I build products and teams that get stronger as they scale. I lead product at TheFork, with experience across consumer and marketplace products.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Andrea Milan",
    description:
      "I build products and teams that get stronger as they scale. I lead product at TheFork, with experience across consumer and marketplace products.",
    url: "https://andreamilan.github.io",
    siteName: "Andrea Milan",
    type: "website",
    images: [
      {
        url: "/images/andrea-picture-hero.jpg",
        alt: "Portrait of Andrea Milan"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Andrea Milan",
    description: "I build products and teams that get stronger as they scale.",
    images: ["/images/andrea-picture-hero.jpg"]
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
