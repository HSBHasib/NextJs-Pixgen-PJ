"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 px-2 mb-4">
      <nav className=" flex justify-between items-center py-3 w-5/6 mx-auto">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={26}
            height={26}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-bold text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm text-gray-700 font-medium">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div>
          <ul className="flex items-center gap-3 text-sm font-medium">
            <li className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm">
              <Link href={"/auth/signup"}>SignUp</Link>
            </li>
            <li className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm">
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;