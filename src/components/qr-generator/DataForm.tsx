"use client";

import { useQrStore } from "@/store/qrStore";

export function DataForm() {
  const { qrData, setQrData } = useQrStore();

  switch (qrData.type) {
    case "text":
      return (
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-gray-700">Text Content</label>
          <textarea
            value={qrData.text || ""}
            onChange={(e) => setQrData({ text: e.target.value })}
            placeholder="Enter text here..."
            className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
          />
          <div className="text-right text-xs text-gray-500">
            {qrData.text?.length || 0} characters
          </div>
        </div>
      );

    case "url":
      return (
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-gray-700">Website URL</label>
          <input
            type="url"
            value={qrData.url || ""}
            onChange={(e) => setQrData({ url: e.target.value })}
            placeholder="https://example.com"
            className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
          />
          {qrData.url && !qrData.url.startsWith("http") && (
            <span className="text-xs text-amber-600">Consider adding https:// or http://</span>
          )}
        </div>
      );

    case "email":
      return (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={qrData.email || ""}
              onChange={(e) => setQrData({ email: e.target.value })}
              placeholder="hello@example.com"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Subject (Optional)</label>
            <input
              type="text"
              value={qrData.subject || ""}
              onChange={(e) => setQrData({ subject: e.target.value })}
              placeholder="Email subject"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
            <textarea
              value={qrData.message || ""}
              onChange={(e) => setQrData({ message: e.target.value })}
              placeholder="Your message here..."
              className="w-full min-h-[100px] p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all resize-y text-sm"
            />
          </div>
        </div>
      );

    case "phone":
      return (
        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={qrData.phone || ""}
            onChange={(e) => setQrData({ phone: e.target.value })}
            placeholder="+1 234 567 8900"
            className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
          />
        </div>
      );

    case "sms":
      return (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={qrData.phone || ""}
              onChange={(e) => setQrData({ phone: e.target.value })}
              placeholder="+1 234 567 8900"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              value={qrData.message || ""}
              onChange={(e) => setQrData({ message: e.target.value })}
              placeholder="Your SMS message here..."
              className="w-full min-h-[100px] p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all resize-y text-sm"
            />
          </div>
        </div>
      );
      
    case "wifi":
      return (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Network Name (SSID)</label>
            <input
              type="text"
              value={qrData.ssid || ""}
              onChange={(e) => setQrData({ ssid: e.target.value })}
              placeholder="MyWiFiNetwork"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={qrData.password || ""}
              onChange={(e) => setQrData({ password: e.target.value })}
              placeholder="Network Password"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Encryption</label>
            <select
              value={qrData.encryption || "WPA"}
              onChange={(e) => setQrData({ encryption: e.target.value as any })}
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm bg-white"
            >
              <option value="WPA">WPA/WPA2/WPA3</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None (Open Network)</option>
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer w-max">
            <input
              type="checkbox"
              checked={qrData.hidden || false}
              onChange={(e) => setQrData({ hidden: e.target.checked })}
              className="w-4 h-4 text-[#4b8b3b] rounded border-gray-300 focus:ring-[#4b8b3b]"
            />
            Hidden Network
          </label>
        </div>
      );

    case "vcard":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={qrData.firstName || ""}
              onChange={(e) => setQrData({ firstName: e.target.value })}
              placeholder="John"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={qrData.lastName || ""}
              onChange={(e) => setQrData({ lastName: e.target.value })}
              placeholder="Doe"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              value={qrData.phone || ""}
              onChange={(e) => setQrData({ phone: e.target.value })}
              placeholder="+1 234 567 8900"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={qrData.email || ""}
              onChange={(e) => setQrData({ email: e.target.value })}
              placeholder="john@example.com"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              value={qrData.company || ""}
              onChange={(e) => setQrData({ company: e.target.value })}
              placeholder="Example Corp"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              value={qrData.jobTitle || ""}
              onChange={(e) => setQrData({ jobTitle: e.target.value })}
              placeholder="Developer"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Website</label>
            <input
              type="url"
              value={qrData.website || ""}
              onChange={(e) => setQrData({ website: e.target.value })}
              placeholder="https://example.com"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <textarea
              value={qrData.address || ""}
              onChange={(e) => setQrData({ address: e.target.value })}
              placeholder="123 Main St, City, Country"
              className="w-full min-h-[80px] p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all resize-y text-sm"
            />
          </div>
        </div>
      );

    case "location":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Latitude</label>
            <input
              type="number"
              step="any"
              value={qrData.latitude || ""}
              onChange={(e) => setQrData({ latitude: e.target.value })}
              placeholder="28.6139"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Longitude</label>
            <input
              type="number"
              step="any"
              value={qrData.longitude || ""}
              onChange={(e) => setQrData({ longitude: e.target.value })}
              placeholder="77.2090"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
        </div>
      );

    case "whatsapp":
      return (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">WhatsApp Phone Number</label>
            <input
              type="tel"
              value={qrData.phone || ""}
              onChange={(e) => setQrData({ phone: e.target.value })}
              placeholder="+1 234 567 8900"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
            <textarea
              value={qrData.message || ""}
              onChange={(e) => setQrData({ message: e.target.value })}
              placeholder="Pre-filled message..."
              className="w-full min-h-[100px] p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all resize-y text-sm"
            />
          </div>
        </div>
      );

    case "upi":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">UPI ID</label>
            <input
              type="text"
              value={qrData.upiId || ""}
              onChange={(e) => setQrData({ upiId: e.target.value })}
              placeholder="example@upi"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Payee Name</label>
            <input
              type="text"
              value={qrData.payeeName || ""}
              onChange={(e) => setQrData({ payeeName: e.target.value })}
              placeholder="John Doe"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Amount (Optional)</label>
            <input
              type="number"
              value={qrData.amount || ""}
              onChange={(e) => setQrData({ amount: e.target.value })}
              placeholder="100.00"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Transaction Note (Optional)</label>
            <input
              type="text"
              value={qrData.transactionNote || ""}
              onChange={(e) => setQrData({ transactionNote: e.target.value })}
              placeholder="Payment for services"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>
        </div>
      );

    default:
      return null;
  }
}
