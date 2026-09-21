import { LeftPanel } from "@/components/layout/LeftPanel";
import { RightPanel } from "@/components/layout/RightPanel";
import { BlogSection } from "@/components/layout/BlogSection";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start border-b border-gray-100 pb-16">
          <LeftPanel />
          <RightPanel />
        </div>

        <BlogSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
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
