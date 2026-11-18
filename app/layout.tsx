import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patillo Digital — Websites that move businesses forward",
  description: "Premium websites, landing pages and conversion strategy for ambitious small businesses and growing brands.",
  metadataBase: new URL("https://patillodigital.com"),
  openGraph: {
    title: "Patillo Digital",
    description: "Website conversion & customer acquisition.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}