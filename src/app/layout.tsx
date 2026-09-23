import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qrgenpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "QRGen Pro – Free QR Code Generator | Custom, Trackable QR Codes",
    template: "%s | QRGen Pro",
  },
  description:
    "Generate free, highly customizable QR codes for URLs, vCards, WiFi, and more. Download in SVG or PNG. No signup required. Track scans with dynamic QR codes.",
  keywords: [
    "QR code generator",
    "free QR code",
    "custom QR code",
    "dynamic QR code",
    "QR code maker",
    "QR code creator online",
    "WiFi QR code",
    "vCard QR code",
    "QR code with logo",
  ],
  authors: [{ name: "QRGen Pro" }],
  creator: "QRGen Pro",
  publisher: "QRGen Pro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "QRGen Pro",
    title: "QRGen Pro – Free QR Code Generator",
    description:
      "Generate free, highly customizable QR codes for URLs, vCards, WiFi, and more. No signup required.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QRGen Pro – Free QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QRGen Pro – Free QR Code Generator",
    description:
      "Generate free, highly customizable QR codes for URLs, vCards, WiFi, and more.",
    images: ["/og-image.png"],
    creator: "@qrgenpro",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 flex flex-col min-h-screen text-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
