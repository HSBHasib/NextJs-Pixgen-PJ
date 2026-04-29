"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger menu icons er jonno

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const handlesignOut = async () => {
    await authClient.signOut();
  };

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  {
    isPending && (
      <>
        <div className="flex justify-center">
          <span className="loading loading-spinner text-secondary text-4xl font-extrabold"></span>
        </div>
      </>
    );
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 px-2 mb-4 relative bg-white">
      <nav className="flex justify-between items-center py-3 w-5/6 mx-auto">
        {/* Logo Section */}
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

        {/* Desktop Menu - Hidden on Mobile, Flex on MD screens */}
        <ul className="hidden md:flex items-center gap-5 text-sm text-gray-700 font-medium">
          <li>
            <Link
              className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === "/" && "border-b-2 pb-0.5 border-purple-500"}`}
              href={"/"}
            >
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === "/all-photos" && "border-b-2 pb-0.5 border-purple-500"}`}
              href={"/all-photos"}
            >
              {" "}
              All Photos{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === "/pricing" && "border-b-2 pb-0.5 border-purple-500"}`}
              href={"/pricing"}
            >
              {" "}
              Pricing{" "}
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === "/profile" && "border-b-2 pb-0.5 border-purple-500"}`}
              href={"/profile"}
            >
              {" "}
              Profile{" "}
            </Link>
          </li>
        </ul>

        {/* Auth & Hamburger Section */}
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-3 text-sm font-medium">
            {!user ? (
              <>
                <li className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm">
                  <Link href={"/auth/signup"}>SignUp</Link>
                </li>
                <li className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm">
                  <Link href={"/auth/signin"}>SignIn</Link>
                </li>
              </>
            ) : (
              <>
                <Avatar
                  src={user.image}
                  name={user?.name?.charAt(0)}
                  size="sm"
                />
                <li
                  onClick={() => handlesignOut()}
                  className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm cursor-pointer"
                >
                  Sign Out
                </li>
              </>
            )}
          </ul>

          {/* Mobile Toggle Button - Visible only on Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-300 z-50 p-4 shadow-lg">
          <ul
            onClick={() => setIsOpen(false)}
            className="flex flex-col gap-4 text-sm font-medium"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-photos">All Photos</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <hr />
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link
                  href="/auth/signup"
                  className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 text-white p-2 text-center rounded-lg"
                >
                  SignUp
                </Link>
                <Link
                  href="/auth/signin"
                  className="border bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 p-2 text-center rounded-lg"
                >
                  SignIn
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  handlesignOut();
                  setIsOpen(false);
                }}
                className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 text-white p-2 rounded-lg text-center"
              >
                Sign Out
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
