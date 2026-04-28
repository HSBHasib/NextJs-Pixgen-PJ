import React from "react";
import Image from "next/image";
import { Chip } from "@heroui/react";
import { BiSolidLike } from "react-icons/bi";
import { Download, Link } from "lucide-react";
import { RxCross2 } from "react-icons/rx";

// Server Component
const DetailsPhotoPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://next-js-pixgen-pj.vercel.app/data.json/`);
  const data = await res.json();

  const targetData = data.filter((dataId) => dataId.id === Number(id));
  const { title, imageUrl, prompt, category, likes, downloads, tags, model } =
    targetData[0];

  return (
    <div className="card bg-base-100 w-[60%] mx-auto shadow-blue-200 shadow-lg mt-2 rounded-lg ">
      <figure className="relative w-full h-auto aspect-square">
          <div className="absolute right-2 top-2 bg-gray-200 p-1 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer z-10">
            <RxCross2 size={20} />
          </div>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </figure>

      <div className="card-body -space-y-1">
        <h2 className="card-title">
          {title}
          <Chip color="accent">{category}</Chip>
        </h2>
        <p className="font-semibold">
          Prompt: <span className="italic font-normal">"{prompt}"</span>
        </p>

        <p className="font-semibold">Model: {model}</p>

        {/* Tags */}
        <div className="space-y-2">
          <p className="font-semibold">Tags:</p>
          <div className="card-actions items-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* --- Likes & Downloads Row --- */}
        <div className="flex justify-between items-center gap-6 py-4 px-5 mt-3 bg-gray-50/50 rounded-lg border border-gray-100 w-full shadow shadow-blue-200">
          {/* Like Stat */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-rose-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              {/* <Heart size={20} className="text-rose-500 fill-rose-500" /> */}
              <BiSolidLike size={20} className="text-blue-500 fill-blue-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-none">
                {likes}
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                Likes
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="h-8 w-[1px] bg-gray-200"></div>
          </div>

          {/* Download Stat */}
          <div className="flex items-center gap-2 group cursor-pointer">
            {/* Vertical Divider */}
            <div className="h-8 w-[1px] bg-gray-200"></div>

            <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
              <Download size={20} className="text-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-gray-900 leading-none">
                {downloads}
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                Downloads
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPhotoPage;
