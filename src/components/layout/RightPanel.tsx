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
    <div className="w-full lg:w-5/12 xl:w-1/3 lg:sticky lg:top-24 flex flex-col gap-6">
      <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 p-6 flex flex-col items-center">
        <h2 className="text-base font-semibold text-gray-800 mb-5 pb-3 w-full text-left border-b border-gray-100">Live Preview</h2>
        
        {/* QR Preview Wrapper */}
        <div className="bg-gray-50 p-4 rounded-md border border-gray-100 mb-8 w-full flex justify-center qr-print-area">
          <QRPreview qrCodeRef={qrCodeRef} />
        </div>

        {/* Action Buttons */}
        <div className="w-full grid grid-cols-1 gap-3">
          <button 
            onClick={() => handleDownload("png")}
            className="w-full py-2.5 px-4 bg-[#0b5b9c] hover:bg-[#09487d] text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download PNG
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => handleDownload("svg")}
              className="py-2.5 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              SVG
            </button>
            <button 
              onClick={() => handleDownload("jpeg")}
              className="py-2.5 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              JPG
            </button>
          </div>

          <button 
            onClick={handlePrint}
            className="w-full mt-1 py-2 px-4 bg-transparent hover:bg-gray-50 border border-transparent hover:border-gray-200 text-gray-600 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
