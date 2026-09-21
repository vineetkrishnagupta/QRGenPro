"use client";

import { useEffect, useRef, MutableRefObject } from "react";
import QRCodeStyling from "qr-code-styling";
import { useQrStore } from "@/store/qrStore";

interface QRPreviewProps {
  qrCodeRef: MutableRefObject<QRCodeStyling | null>;
}

export function QRPreview({ qrCodeRef }: QRPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
      }
    } else {
      // Update existing QR code
      qrCodeRef.current.update({
        ...qrOptions,
        // Override width/height for preview purposes, or use the real ones but scaled via CSS
      });
    }
  }, [qrOptions, qrCodeRef]);

  return (
    <div 
      className="relative flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 p-4 transition-all duration-300"
      style={{ minWidth: 300, minHeight: 300 }}
    >
      {/* Container for the QR Code canvas/svg */}
      <div ref={containerRef} className="qr-container" />
    </div>
  );
}
