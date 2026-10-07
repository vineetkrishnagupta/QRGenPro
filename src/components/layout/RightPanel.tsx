"use client";

import { QRPreview } from "@/components/qr-generator/QRPreview";
import { Download, Printer } from "lucide-react";
import { useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export function RightPanel() {
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  const handleDownload = (ext: "png" | "jpeg" | "svg") => {
    if (qrCodeRef.current) {
      qrCodeRef.current.download({
        extension: ext,
        name: "qr-code"
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <aside aria-label="QR Code Output and Actions" className="w-full lg:w-5/12 xl:w-1/3 lg:sticky lg:top-24 flex flex-col gap-6">
      <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 p-5 sm:p-6 flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-5 pb-3 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">Live Preview</h2>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-[#3d722f] border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4b8b3b] animate-pulse" />
            Active
          </span>
        </div>
        
        {/* QR Preview Wrapper */}
        <div className="bg-gray-50/80 p-4 sm:p-5 rounded-xl border border-gray-100 mb-6 w-full flex justify-center items-center qr-print-area overflow-hidden">
          <QRPreview qrCodeRef={qrCodeRef} />
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-2.5">
          <button 
            type="button"
            onClick={() => handleDownload("png")}
            aria-label="Download QR code in PNG format"
            className="w-full py-2.5 px-4 min-h-[44px] bg-[#4b8b3b] hover:bg-[#3d722f] active:scale-[0.99] text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download High-Res PNG</span>
          </button>
          
          <div className="grid grid-cols-2 gap-2.5">
            <button 
              type="button"
              onClick={() => handleDownload("svg")}
              aria-label="Download QR code in SVG format"
              className="py-2.5 px-3 min-h-[42px] bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.99] text-gray-700 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <Download className="w-4 h-4 text-gray-500" />
              <span>SVG (Vector)</span>
            </button>
            <button 
              type="button"
              onClick={() => handleDownload("jpeg")}
              aria-label="Download QR code in JPG format"
              className="py-2.5 px-3 min-h-[42px] bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.99] text-gray-700 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <Download className="w-4 h-4 text-gray-500" />
              <span>JPG (Photo)</span>
            </button>
          </div>

          <button 
            type="button"
            onClick={handlePrint}
            aria-label="Print QR code"
            className="w-full py-2 px-4 min-h-[40px] bg-transparent hover:bg-gray-50 border border-transparent hover:border-gray-200 text-gray-600 hover:text-gray-900 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print QR Code</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
