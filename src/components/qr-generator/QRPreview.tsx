"use client";

import { useEffect, useRef, useState, MutableRefObject } from "react";
import QRCodeStyling from "qr-code-styling";
import { useQrStore } from "@/store/qrStore";

interface QRPreviewProps {
  qrCodeRef: MutableRefObject<QRCodeStyling | null>;
}

export function QRPreview({ qrCodeRef }: QRPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const { qrOptions } = useQrStore();

  useEffect(() => {
    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling({
        ...qrOptions,
        width: 300,
        height: 300,
        margin: 0 // We'll manage margin via CSS/container for the preview to look tight
      });
      if (containerRef.current) {
        qrCodeRef.current.append(containerRef.current);
        setIsReady(true);
      }
    } else {
      // Update existing QR code
      qrCodeRef.current.update({
        ...qrOptions,
      });
      setIsReady(true);
    }
  }, [qrOptions, qrCodeRef]);

  return (
    <div 
      className="relative flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 p-4 transition-all duration-300"
      style={{ minWidth: 300, minHeight: 300 }}
    >
      {/* Loading state indicator */}
      {!isReady && (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xs rounded-lg gap-2 z-10"
          aria-live="polite"
        >
          <div className="w-7 h-7 border-2 border-gray-200 border-t-[#4b8b3b] rounded-full animate-spin" />
          <span className="text-xs font-medium text-gray-500">Preparing preview...</span>
        </div>
      )}

      {/* Container for the QR Code canvas/svg */}
      <div 
        ref={containerRef} 
        className={`qr-container transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`} 
      />
    </div>
  );
}
