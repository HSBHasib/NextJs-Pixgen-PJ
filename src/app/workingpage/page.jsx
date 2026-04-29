"use client";

import { Button, Card } from "@heroui/react";
import { Hammer, ArrowLeft, Construction, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Subtle Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-50 rounded-full blur-[120px] opacity-60" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Icon Container */}
        <div className="mb-8 relative inline-block">
          <div className="p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm relative z-10">
            <Hammer size={48} className="text-black animate-bounce" />
          </div>
          {/* Decorative Sparkle */}
          <Sparkles className="absolute -top-2 -right-2 text-purple-500 animate-pulse" size={24} />
          <Construction className="absolute -bottom-2 -left-2 text-blue-500" size={24} />
        </div>

        {/* Text Content */}
        <h1 className="text-5xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
          We&apos;re Still <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Building This Pixel.
          </span>
        </h1>
        
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-8 font-medium">
          The page you are looking for is currently under heavy creative development. 
          Our AI engine is working hard to generate this experience for you.
        </p>

        {/* Status Card */}
        <Card className="bg-gray-50/50 border border-gray-100 shadow-none p-6 mb-5 max-w-sm mx-auto rounded-3xl">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 font-semibold">Development Status:</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-600 font-bold">85% Complete</span>
            </div>
          </div>
        </Card>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="bg-black text-white font-bold h-14 px-10 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            onClick={() => router.push("/")}
            startContent={<ArrowLeft size={18} />}
          >
            Back to Home
          </Button>
          
          <Button 
            variant="outline"
            className="border-gray-200 text-gray-700 font-bold h-14 px-10 rounded-2xl"
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </div>

        {/* Footer Brand */}
        <div className="mt-5">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
            PixGen Future Release
          </p>
        </div>
      </div>
    </div>
  );
}
