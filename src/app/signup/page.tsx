"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      // Mock signup: just log them in
      login(name, email);
      router.push("/");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full h-full min-h-[calc(100vh-64px)]">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Create an account</h1>
          <p className="text-gray-500 text-sm">Start generating unlimited QR codes</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
          </div>

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
            <label className="text-sm font-semibold text-gray-700 block">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-2.5 rounded-md border border-gray-300 focus:border-[#4b8b3b] focus:ring-1 focus:ring-[#4b8b3b] outline-none transition-all text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters long</p>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#4b8b3b] hover:bg-[#3d722f] text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            Create account
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/login" className="font-medium text-[#4b8b3b] hover:text-[#3d722f]">
            Log in instead
          </Link>
        </div>
      </div>
    </div>
  );
}
