import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Free",
  description:
    "Create a free QRGen Pro account to start generating unlimited static QR codes and track scans with dynamic codes.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/signup" },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
