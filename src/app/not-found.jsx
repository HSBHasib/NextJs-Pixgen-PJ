"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {

    const router = useRouter();

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-slate-900 px-4">
      {/* Soft Background Blur - Light Theme Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-purple-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Large 404 Number with Gradient */}
        <h1 className="text-[150px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-slate-200 to-slate-400 opacity-50">
          404
        </h1>

        <div className="mt-[-40px]">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Wrong Prompt, Maybe?
          </h2>
          <p className="text-slate-500 max-w-sm mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved.
            Perhaps our AI is still dreaming it up.{" "}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-10 py-4 bg-gray-900 hover:bg-black text-white rounded-2xl font-semibold transition-all shadow-xl hover:shadow-gray-400 transition-all duration-300 active:scale-95"
            >
              Back to Home
            </Link>

            <button
              onClick={() => router.back()}
              className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition-all active:scale-95"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="mt-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
            Powered by PixGen
          </p>
        </div>
      </div>
    </div>
  );
}
