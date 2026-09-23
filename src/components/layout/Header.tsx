"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export function Header() {
  const { user, logout } = useAuthStore();
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.02)] print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="QRGen Pro – Home">
          <div className="w-8 h-8 bg-[#4b8b3b] rounded flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            QRGen<span className="text-[#4b8b3b]">Pro</span>
          </h1>
        </Link>

        {/* Center Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <Link href="/#products" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-sm px-1 transition-colors">Products</Link>
          <Link href="/#solutions" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-sm px-1 transition-colors">Solutions</Link>
          <Link href="/#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-sm px-1 transition-colors">Pricing</Link>
          <Link href="/#resources" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-sm px-1 transition-colors">Resources</Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700 hidden sm:block">Welcome, {user.name}</span>
              <button 
                onClick={logout}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Log in
              </Link>
              <Link href="/signup" className="bg-[#4b8b3b] hover:bg-[#3d722f] text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm">
                Sign Up Free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
