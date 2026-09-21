"use client";

import { useState } from "react";
import { useQrStore } from "@/store/qrStore";
import { QrType } from "@/types/qr";
import { 
  TypeIcon, LinkIcon, MailIcon, PhoneIcon, MessageSquareIcon, 
  WifiIcon, ContactIcon, MapPinIcon, MessageCircleIcon, CreditCardIcon 
} from "lucide-react";
import { DataForm } from "@/components/qr-generator/DataForm";
import { CustomizationPanel } from "@/components/qr-generator/CustomizationPanel";

const QR_TYPES: { type: QrType; label: string; icon: any }[] = [
  { type: "text", label: "Text", icon: TypeIcon },
  { type: "url", label: "URL", icon: LinkIcon },
  { type: "email", label: "Email", icon: MailIcon },
  { type: "phone", label: "Phone", icon: PhoneIcon },
  { type: "sms", label: "SMS", icon: MessageSquareIcon },
  { type: "wifi", label: "WiFi", icon: WifiIcon },
  { type: "vcard", label: "vCard", icon: ContactIcon },
  { type: "location", label: "Location", icon: MapPinIcon },
  { type: "whatsapp", label: "WhatsApp", icon: MessageCircleIcon },
  { type: "upi", label: "UPI", icon: CreditCardIcon },
];

export function LeftPanel() {
  const { qrData, setQrData } = useQrStore();

  return (
    <div className="w-full lg:w-7/12 xl:w-2/3 flex flex-col gap-6">
      <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 p-6 overflow-hidden">
        <h2 className="text-base font-semibold text-gray-800 mb-5 pb-3 border-b border-gray-100">1. Select QR Type</h2>
        <div className="flex flex-wrap gap-2">
          {QR_TYPES.map(({ type, label, icon: Icon }) => (
            <button
              key={type}
              onClick={() => setQrData({ type })}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                qrData.type === type
                  ? "bg-[#4b8b3b] text-white shadow-sm"
                  : "bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-5 pb-3 border-b border-gray-100">2. Content Details</h2>
        <div className="min-h-[200px]">
          <DataForm />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 p-6">
        <h2 className="text-base font-semibold text-gray-800 mb-5 pb-3 border-b border-gray-100">3. Customize Design</h2>
        <div className="min-h-[300px]">
          <CustomizationPanel />
        </div>
      </div>
    </div>
  );
}
