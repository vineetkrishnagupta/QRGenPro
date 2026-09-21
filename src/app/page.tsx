import { LeftPanel } from "@/components/layout/LeftPanel";
import { RightPanel } from "@/components/layout/RightPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0b5b9c] rounded flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              QRGen<span className="text-[#0b5b9c]">Pro</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
          <LeftPanel />
          <RightPanel />
        </div>

        {/* SEO / Blog Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 mb-16 max-w-4xl mx-auto">
          <article className="prose prose-blue max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Ultimate QR Code Generator Guide</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What is a QR Code?</h3>
            <p className="mb-4 leading-relaxed">
              A QR code (Quick Response code) is a two-dimensional barcode that can store vast amounts of data, from website URLs and text to contact information and payment details. Unlike traditional barcodes, QR codes can be scanned quickly using a smartphone camera, making them an essential tool for modern marketing, networking, and seamless information sharing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Why Use Our QR Code Generator?</h3>
            <p className="mb-4 leading-relaxed">
              Our <strong>QRGen Pro</strong> platform is designed with both simplicity and deep customization in mind. Whether you need a quick WiFi access code for your cafe, a vCard for your networking events, or a branded UPI payment link, our generator works entirely in your browser. This means <strong>zero data tracking</strong>, instant live previews, and maximum privacy.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>10+ Data Types:</strong> Support for URLs, Text, vCards, WiFi, WhatsApp, UPI, and more.</li>
              <li><strong>Extensive Customization:</strong> Change colors, dot styles, corner patterns, and add your own logo.</li>
              <li><strong>High Quality Exports:</strong> Download in PNG, JPG, or scalable SVG format for print marketing.</li>
              <li><strong>100% Free & Secure:</strong> All QR codes are generated locally on your device.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How to Create the Perfect QR Code</h3>
            <ol className="list-decimal pl-6 space-y-3 mb-8">
              <li><strong>Select Your Type:</strong> Choose the type of information you want to share (e.g., URL for websites, vCard for contacts).</li>
              <li><strong>Enter Your Data:</strong> Fill in the required fields. Ensure your URLs start with <code>https://</code> for best results.</li>
              <li><strong>Customize the Design:</strong> Make it match your brand. Choose contrasting colors (dark foreground on a light background) to ensure it remains scannable.</li>
              <li><strong>Add a Logo:</strong> You can place your logo in the center. We recommend using a high error correction level (Q or H) when using logos.</li>
              <li><strong>Test and Download:</strong> Always scan your QR code with a phone before printing it on physical materials!</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Why 4 Million+ Users Trust TQRCG for ROI Driven QR Code Campaigns</h3>
            <p className="mb-4 leading-relaxed">
              When it comes to executing high-performing, ROI-driven marketing campaigns, reliability is key. That's why over 4 million users trust our platform. Our QR codes are optimized for maximum scan rates, ensuring that every printed material, digital ad, or product packaging turns into a high-converting touchpoint. We provide the perfect balance of aesthetic customization and enterprise-grade scannability.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Where to place your QR Code to improve scans?</h3>
            <p className="mb-4 leading-relaxed">
              Placement can make or break your QR code campaign. Here are the best practices for QR code placement to maximize visibility and user engagement:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Product Packaging:</strong> Place the code on a flat, easily scannable surface rather than around sharp curves.</li>
              <li><strong>Direct Mail & Flyers:</strong> Keep it away from the edges and ensure it is printed large enough (at least 2x2 cm).</li>
              <li><strong>Storefront Windows:</strong> Position it at eye level so passersby can scan it comfortably without bending down or reaching up.</li>
              <li><strong>Business Cards:</strong> Place a vCard QR code on the back of your business card to instantly transfer your contact details to the scanner's phone.</li>
              <li><strong>Digital Screens:</strong> If presenting on a TV or webinar, ensure the QR code stays on screen long enough (at least 15 seconds) for viewers to open their camera apps.</li>
            </ul>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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
                <li><a href="#" className="hover:text-blue-400 transition-colors">URL to QR</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">vCard Generator</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">WiFi QR Creator</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Logos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
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
