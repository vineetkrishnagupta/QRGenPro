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
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200/80 sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.03)] print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-95" aria-label="QRGen Pro – Home">
          <div className="w-8 h-8 bg-gradient-to-br from-[#549c42] to-[#3f7a31] rounded-lg flex items-center justify-center shadow-sm shadow-[#4b8b3b]/20 transition-transform group-hover:scale-105">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-1.5">
            <span>QRGen</span>
            <span className="text-[#4b8b3b]">Pro</span>
            <span className="text-[10px] font-semibold text-[#4b8b3b] bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">v1.0</span>
          </h1>
        </Link>

        {/* Center Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          <Link href="/#products" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-md px-2 py-1 transition-colors">Products</Link>
          <Link href="/#solutions" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-md px-2 py-1 transition-colors">Solutions</Link>
          <Link href="/#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-md px-2 py-1 transition-colors">Pricing</Link>
          <Link href="/#resources" className="text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-[#4b8b3b] outline-none rounded-md px-2 py-1 transition-colors">Resources</Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {user ? (
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-sm font-medium text-gray-700 hidden sm:block">Welcome, <strong className="font-semibold text-gray-900">{user.name}</strong></span>
              <button 
                onClick={logout}
                className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors px-2 py-1 rounded-md"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="hidden sm:inline-flex text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
                Log in
              </Link>
              <Link href="/signup" className="inline-flex items-center justify-center bg-[#4b8b3b] hover:bg-[#3d722f] active:scale-[0.98] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow">
                Sign Up Free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
