"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Mock login: extract name from email (e.g. john@example.com -> John)
      const mockName = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
      login(mockName, email);
      router.push("/");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full h-full min-h-[calc(100vh-64px)]">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Welcome back</h2>
          <p className="text-gray-500 text-sm">Log in to your QRGen Pro account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700 block">Password</label>
              <a href="#" className="text-xs font-medium text-[#4b8b3b] hover:text-[#3d722f]">Forgot password?</a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#4b8b3b] hover:bg-[#3d722f] text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            Log in
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-500">Don't have an account? </span>
          <Link href="/signup" className="font-medium text-[#4b8b3b] hover:text-[#3d722f]">
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}
