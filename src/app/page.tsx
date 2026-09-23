import type { Metadata } from "next";
import { LeftPanel } from "@/components/layout/LeftPanel";
import { RightPanel } from "@/components/layout/RightPanel";
import { BlogSection } from "@/components/layout/BlogSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "QRGen Pro",
  url: "https://qrgenpro.com",
  description:
    "Free, highly customizable QR code generator for URLs, vCards, WiFi networks, and more. Download in SVG or PNG format.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "URL QR Codes",
    "vCard QR Codes",
    "WiFi QR Codes",
    "Custom Logo QR Codes",
    "Dynamic QR Codes with analytics",
    "SVG & PNG download",
  ],
};
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is a QR Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Quick Response (QR) code is a 2D matrix barcode designed to hold a large amount of digital information. Unlike traditional vertical barcodes, QR codes can be instantly read by smartphone cameras, seamlessly connecting physical objects to digital experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Why are QR codes so popular today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They offer a frictionless way to share information. Instead of typing long web addresses, users simply point their cameras to access menus, process payments, or save contact details in a fraction of a second.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a special app to scan them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most modern smartphones have built-in QR readers in their native camera apps. Just open your camera, point it at the code, and tap the popup notification that appears on your screen.",
      },
    },
    {
      "@type": "Question",
      name: "Do QR Codes expire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Static QR codes never expire because the data is hardcoded directly into the pattern. However, dynamic QR codes require an active subscription to maintain the redirection link on our servers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track how many times my QR Code is scanned?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! If you create a Dynamic QR Code, our platform provides detailed analytics including scan counts, unique visitors, geographic locations, and the types of devices used.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a limit to how many QR Codes I can generate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you can generate an unlimited number of static QR codes for free. For dynamic codes and advanced analytics, we offer premium plans tailored to businesses of all sizes.",
      },
    },
  ],
};

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Visually hidden h1 for heading hierarchy & SEO */}
      <h1 className="sr-only">QRGen Pro – Free QR Code Generator</h1>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start border-b border-gray-100 pb-16">
          <LeftPanel />
          <RightPanel />
        </div>

        <BlogSection />
      </main>

      {/* Footer */}
      <footer aria-label="Site footer" className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#4b8b3b] rounded flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">QRGen Pro</h3>
              </div>
              <p className="text-gray-400 max-w-sm">
                The fastest, most secure, and highly customizable QR code generator on the web. Built for professionals and everyday users alike.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#4b8b3b] transition-colors">URL to QR</a></li>
                <li><a href="#" className="hover:text-[#4b8b3b] transition-colors">vCard Generator</a></li>
                <li><a href="#" className="hover:text-[#4b8b3b] transition-colors">WiFi QR Creator</a></li>
                <li><a href="#" className="hover:text-[#4b8b3b] transition-colors">Custom Logos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#4b8b3b] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#4b8b3b] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#4b8b3b] transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} QRGen Pro. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
