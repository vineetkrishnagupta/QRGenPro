"use client";

import { useState } from "react";
import { ChevronDown, Link, FileText, Smartphone, Package, FileBarChart, Users } from "lucide-react";

export function BlogSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is a QR Code?",
      answer: "A Quick Response (QR) code is a 2D matrix barcode designed to hold a large amount of digital information. Unlike traditional vertical barcodes, QR codes can be instantly read by smartphone cameras, seamlessly connecting physical objects to digital experiences."
    },
    {
      question: "Why are QR codes so popular today?",
      answer: "They offer a frictionless way to share information. Instead of typing long web addresses, users simply point their cameras to access menus, process payments, or save contact details in a fraction of a second."
    },
    {
      question: "Do I need a special app to scan them?",
      answer: "Most modern smartphones have built-in QR readers in their native camera apps. Just open your camera, point it at the code, and tap the popup notification that appears on your screen."
    }
  ];

  return (
    <div className="w-full flex flex-col gap-24 py-12">
      
      {/* 3 Simple Steps Section */}
      <section className="max-w-5xl mx-auto w-full px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">Generate Your Free QR Code in 3 Easy Steps</h2>
        
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Your Data Format</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Pick the type of content you want to share. Whether it's a website link, digital business card, WiFi network, or a plain text message, we have a specialized template ready for you.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalize Your Design</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Make it yours by adjusting colors, tweaking the corner shapes, and embedding your brand's logo. Our live preview lets you see exactly how it looks before you hit download.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Codes Explained (Accordion) */}
      <section id="resources" className="w-full bg-[#f6f9f6] py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Understanding QR Codes</h2>
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
      <section id="pricing" className="max-w-5xl mx-auto px-4 w-full scroll-mt-24">
        <div className="bg-[#dcf0e2] rounded-2xl py-12 px-8 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Create QR Codes Directly From Your Browser</h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            Stop jumping between tabs. Install our free browser extension to instantly generate QR codes for any webpage you're currently visiting with a single click.
          </p>
          <button className="bg-[#4b8b3b] hover:bg-[#3d722f] text-white px-6 py-3 rounded-md font-semibold transition-colors">
            Download Free Extension
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section id="solutions" className="max-w-5xl mx-auto px-4 w-full text-center scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Marketers and Businesses Rely on Our QR Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-purple-500">
              <FileBarChart className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Real-Time Analytics</h3>
            <p className="text-gray-500 text-sm">Gain insights into how your campaigns perform by tracking scan locations, timestamps, and device metrics.</p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-emerald-500">
              <Smartphone className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Editable Dynamic Codes</h3>
            <p className="text-gray-500 text-sm">Change the link behind your QR code at any time without needing to reprint your physical marketing materials.</p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 flex flex-col items-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-orange-400">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Seamless Team Collaboration</h3>
            <p className="text-gray-500 text-sm">Invite team members, share project folders, and manage large-scale marketing campaigns from a unified dashboard.</p>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section id="products" className="max-w-5xl mx-auto px-4 w-full text-center scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Explore Our Most Popular QR Formats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f9f9f9] rounded-xl p-8 text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-green-500">
              <Link className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Web Links (URL)</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Drive instant traffic to your landing pages, online stores, or social media profiles. URL codes are the perfect bridge between print media and your digital presence.
            </p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-orange-500">
              <Link className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Smart Multi-Links</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Route users to different destinations based on their device OS, language, or location using a single intelligent QR code.
            </p>
          </div>
          <div className="bg-[#f9f9f9] rounded-xl p-8 text-left">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-purple-500">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Document Sharing (PDF)</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Upload menus, product manuals, or marketing brochures. Users can view and download your documents instantly without needing bulky attachments.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="max-w-5xl mx-auto px-4 w-full text-center pb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Best Practices for QR Code Placement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f9f9f9] rounded-xl overflow-hidden text-left border border-gray-100 flex flex-col">
            <div className="h-48 bg-orange-100 w-full relative">
               <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80" alt="Pizza box" className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-2 rounded shadow-lg"><div className="w-16 h-16 bg-black rounded-sm" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 20% 20%, 20% 80%, 80% 80%, 80% 20%, 20% 20%)' }}></div></div>
               </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Product Packaging</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Enhance your unboxing experience. Link to assembly videos, warranty registrations, or exclusive discounts right on your product boxes.
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
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Print Advertising</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Boost offline engagement by adding scannable calls-to-action on flyers, billboards, and magazine ads to drive direct online conversions.
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
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Networking Cards</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Modernize your business cards. Allow new connections to save your phone number, email, and LinkedIn profile straight to their contacts with one scan.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
