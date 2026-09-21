"use client";

import { useState } from "react";
import { ChevronDown, Link, FileText, Smartphone, Package, FileBarChart, Users } from "lucide-react";

export function BlogSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a QR Code?",
      answer: "A QR code (Quick Response code) is a two-dimensional barcode that can store vast amounts of data, from website URLs and text to contact information and payment details. Unlike traditional barcodes, QR codes can be scanned quickly using a smartphone camera, making them an essential tool for modern marketing, networking, and seamless information sharing."
    },
    {
      question: "Why do so many people use QR Codes in 2026?",
      answer: "Because they seamlessly bridge the gap between the physical and digital worlds. With built-in smartphone scanners, consumers expect instant access to menus, websites, and promotions without typing URLs."
    },
    {
      question: "How do I scan one?",
      answer: "Simply open your smartphone's camera app, point it at the QR code, and tap the link that appears on your screen. No special apps are required for modern iOS and Android devices."
    }
  ];

  return (
    <div className="w-full flex flex-col gap-24 py-12">
      
      {/* 3 Simple Steps Section */}
      <section className="max-w-5xl mx-auto w-full px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">How to create a free QR Code in 3 simple steps</h2>
        
        <div className="flex flex-col gap-20">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 flex items-center justify-center min-h-[300px] border border-green-100 shadow-sm relative">
              <div className="absolute right-0 translate-x-1/2 w-8 h-8 bg-[#4b8b3b] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10 md:flex hidden">
                1
              </div>
              {/* Fake UI for step 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-sm flex flex-col gap-4">
                <div className="h-10 bg-gray-50 border border-gray-200 rounded flex items-center px-4 text-sm text-gray-400">Enter URL...</div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                     <div className="w-12 h-12 bg-black rounded-sm" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 20%, 20% 80%, 80% 80%, 80% 20%, 20% 20%)' }}></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-2">
                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                    <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-left">
              <div className="w-8 h-8 bg-[#4b8b3b] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md mb-4 md:hidden">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose your QR Code type</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Choose your QR Code type (static or dynamic) based on what you want it to do: open a URL, share a PDF, display a menu, share contact details, and more.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px] border border-gray-200 shadow-sm relative">
              <div className="absolute left-0 -translate-x-1/2 w-8 h-8 bg-[#4b8b3b] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10 md:flex hidden">
                2
              </div>
               {/* Fake UI for step 2 */}
               <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-sm flex flex-col items-center gap-6">
                <div className="w-32 h-32 border-4 border-dashed border-purple-200 rounded-lg flex items-center justify-center text-purple-400">
                  QR PREVIEW
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-black rounded"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded"></div>
                  <div className="w-8 h-8 bg-orange-400 rounded"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-left md:text-right">
              <div className="w-8 h-8 bg-[#4b8b3b] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md mb-4 md:hidden">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customize it your way</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Add your details, change the color, style your QR Code, add a logo, and test it in real time before you download and share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Codes Explained (Accordion) */}
      <section className="w-full bg-[#f6f9f6] py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">QR Codes explained</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="bg-[#dcf0e2] rounded-2xl py-12 px-8 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Generate a QR Code without leaving your tab</h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            No more switching screens or copying links. Just tap the TQRCG Chrome Extension to create a QR Code with just a click.
          </p>
          <button className="bg-[#4b8b3b] hover:bg-[#3d722f] text-white px-6 py-3 rounded-md font-semibold transition-colors">
            Get the free QR Code Extension
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-5xl mx-auto px-4 w-full text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Why 4 Million+ Users Trust TQRCG for ROI Driven QR Code Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-purple-500">
              <FileBarChart className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Track every scan</h3>
            <p className="text-gray-500 text-sm">Monitor scan locations, times, and devices to measure your campaign's true ROI.</p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-emerald-500">
              <Smartphone className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Free dynamic QR Codes</h3>
            <p className="text-gray-500 text-sm">Update the destination URL even after your QR code has been printed.</p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-orange-400">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Collaborate with Your Team</h3>
            <p className="text-gray-500 text-sm">Share workspaces and manage large scale QR campaigns together seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="max-w-5xl mx-auto px-4 w-full text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">What types of QR Codes can you create for free?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f9f9f9] rounded-xl p-8 text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-green-500">
              <Link className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Website (URL)</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Turn any flyer, product label, or poster into a direct traffic booster by linking it to your website, landing page, or online store. With just a quick scan, people are where you want them to be — and if your link changes, dynamic QR Codes let you update the URL anytime without reprinting.
            </p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-orange-500">
              <Link className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Multi-URL</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Link websites, videos, and social profiles in a single QR Code. This works well for campaigns where you want to offer multiple options. You can update or reorder the links anytime without creating a new code.
            </p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-purple-500">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">PDF (Files)</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Share brochures, menus, e-books, or guides as downloadable PDFs. It is a clean way to keep your audience informed without bulky attachments. You can also upload a new file anytime using a dynamic QR Code.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="max-w-5xl mx-auto px-4 w-full text-center pb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Where to place your QR Code to improve scans?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f9f9f9] rounded-xl overflow-hidden text-left border border-gray-100 flex flex-col">
            <div className="h-48 bg-orange-100 w-full relative">
               <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80" alt="Pizza box" className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-2 rounded shadow-lg"><div className="w-16 h-16 bg-black rounded-sm" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 20%, 20% 80%, 80% 80%, 80% 20%, 20% 20%)' }}></div></div>
               </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Packaging</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Add QR Codes to product boxes, labels, or inserts. Use it to share manuals, how-to videos, or warranty details to help customers access useful content right after purchase without extra steps.
              </p>
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl overflow-hidden text-left border border-gray-100 flex flex-col">
             <div className="h-48 bg-stone-200 w-full relative">
               <img src="https://images.unsplash.com/photo-1506456087799-73fb4e91262d?w=500&q=80" alt="Brick wall poster" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-stone-50 border border-stone-300 w-24 h-32 flex flex-col items-center justify-center shadow-lg p-2 gap-2 transform -rotate-2">
                    <span className="text-[8px] font-bold">EVENT</span>
                    <div className="w-12 h-12 bg-black rounded-sm" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 20%, 20% 80%, 80% 80%, 80% 20%, 20% 20%)' }}></div>
                  </div>
               </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Posters and Flyers</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Place QR Codes on marketing materials to drive sign-ups, event registrations, or website visits. Turn offline interest into instant online engagement.
              </p>
            </div>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl overflow-hidden text-left border border-gray-100 flex flex-col">
             <div className="h-48 bg-blue-50 w-full relative">
               <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80" alt="Business card" className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white w-32 h-20 shadow-xl rounded flex items-center justify-end p-3 border border-gray-200">
                    <div className="w-12 h-12 bg-[#0b5b9c] rounded-sm flex items-center justify-center text-white text-[6px]">QR</div>
                 </div>
               </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Business Cards</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Share all your contact details with a single scan — website, phone, LinkedIn, or calendar link. Ideal for networking events or remote introductions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
