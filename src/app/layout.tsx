import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://libecciolimited.com"),
  title: {
    default: "Libeccio Limited — Louisville Real Estate Portfolio",
    template: "%s — Libeccio Limited",
  },
  description:
    "Libeccio Limited is a Louisville real estate company curating a portfolio of distinctive properties across acquisition, development, and management.",
  openGraph: {
    title: "Libeccio Limited — Louisville Real Estate Portfolio",
    description:
      "A curated portfolio of distinctive Louisville properties — acquisition, development, and management.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} flex min-h-screen flex-col bg-bg text-ink`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
