"use client";

import { useQrStore } from "@/store/qrStore";

export function CustomizationPanel() {
  const { qrOptions, setDeepQrOptions, setQrOptions } = useQrStore();

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size should be less than 2MB to maintain scannability.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setQrOptions({ image: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Colors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">QR Color (Foreground)</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={qrOptions.dotsOptions.color}
              onChange={(e) => setDeepQrOptions("dotsOptions", { color: e.target.value })}
              className="w-10 h-10 rounded cursor-pointer border-0 p-0"
            />
            <input
              type="text"
              value={qrOptions.dotsOptions.color}
              onChange={(e) => setDeepQrOptions("dotsOptions", { color: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#4b8b3b]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Background Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={qrOptions.backgroundOptions.color}
              onChange={(e) => setDeepQrOptions("backgroundOptions", { color: e.target.value })}
              className="w-10 h-10 rounded cursor-pointer border-0 p-0"
            />
            <input
              type="text"
              value={qrOptions.backgroundOptions.color}
              onChange={(e) => setDeepQrOptions("backgroundOptions", { color: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md text-sm outline-none focus:border-[#4b8b3b]"
            />
          </div>
        </div>
      </div>

      {/* Style & Errors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Pattern Style</label>
          <select
            value={qrOptions.dotsOptions.type}
            onChange={(e) => setDeepQrOptions("dotsOptions", { type: e.target.value })}
            className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] bg-white text-sm outline-none transition-all"
          >
            <option value="square">Square</option>
            <option value="rounded">Rounded</option>
            <option value="dots">Dots</option>
            <option value="classy">Classy</option>
            <option value="classy-rounded">Classy Rounded</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Corner Square Style</label>
          <select
            value={qrOptions.cornersSquareOptions.type}
            onChange={(e) => setDeepQrOptions("cornersSquareOptions", { type: e.target.value })}
            className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] bg-white text-sm outline-none transition-all"
          >
            <option value="square">Square</option>
            <option value="dot">Dot</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Error Correction</label>
          <select
            value={qrOptions.qrOptions.errorCorrectionLevel}
            onChange={(e) => setDeepQrOptions("qrOptions", { errorCorrectionLevel: e.target.value })}
            className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] bg-white text-sm outline-none transition-all"
          >
            <option value="L">Low (7%)</option>
            <option value="M">Medium (15%) - Default</option>
            <option value="Q">Quartile (25%)</option>
            <option value="H">High (30%)</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Corner Dot Style</label>
          <select
            value={qrOptions.cornersDotOptions.type}
            onChange={(e) => setDeepQrOptions("cornersDotOptions", { type: e.target.value })}
            className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] bg-white text-sm outline-none transition-all"
          >
            <option value="square">Square</option>
            <option value="dot">Dot</option>
          </select>
        </div>
      </div>

      {/* Logo */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-gray-700">Logo (Optional)</label>
        <div className="flex items-center gap-4">
          <label className="cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md text-sm font-medium transition-colors">
            Upload Logo
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
          </label>
          {qrOptions.image && (
            <button
              onClick={() => setQrOptions({ image: undefined })}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Remove Logo
            </button>
          )}
        </div>
        <p className="text-xs text-gray-500">Max size 2MB. Use higher error correction when adding a logo.</p>
      </div>
    </div>
  );
}
