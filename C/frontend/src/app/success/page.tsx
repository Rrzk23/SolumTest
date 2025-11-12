'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { getLoggedInEmail, logout } from "@/server/demoauth";


export default function SuccessPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState<string | null>(null);

  React.useEffect(() => {
    const e = getLoggedInEmail();
    if (!e) {
      // no session — go back to login
      void router.replace("/");
      return;
    }
    setEmail(e);
  }, [router]);

  function handleLogout() {
    logout();
    void router.push("/");
  }

  if (!email) {
    // Brief placeholder while checking session / redirecting
    return (
      <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-7 text-center">
            <p className="text-gray-600">Redirecting…</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-7 text-center">
          <h2 className="text-xl font-semibold text-gray-900">Welcome, {email}!</h2>
          <p className="text-sm text-gray-600 mt-1">You are now logged in (frontend only).</p>
          <button onClick={handleLogout} className="mt-6 inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">Logout</button>
        </div>
        <p className="mt-4 text-center text-xs text-gray-500">This page enforces a simple client-side session.</p>
      </div>
    </div>
  );
}