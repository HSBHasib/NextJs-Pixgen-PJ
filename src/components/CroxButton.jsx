'use client'

import { useRouter } from "next/navigation";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const CroxButton = () => {
    const router = useRouter();
  return (
    <div onClick={() => router.back()} className="absolute right-2 top-2 bg-gray-200 p-1 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer z-10">
      <RxCross2 size={20} />
    </div>
  );
};

export default CroxButton;
