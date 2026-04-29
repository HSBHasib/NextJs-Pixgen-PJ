"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();
  console.log("path is .......... ",pathname);

  // Google singnUp
  const googleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  // Github signUp
  const githubSignUp = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

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
            <Link className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === '/' && 'border-b-2 pb-0.5 border-purple-500'}`} href={"/"}>Home</Link>
          </li>
          <li>
            <Link className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === '/all-photos' && 'border-b-2 pb-0.5 border-purple-500'}`} href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === '/pricing' && 'border-b-2 pb-0.5 border-purple-500'}`} href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link className={`hover:border-b-2 hover:pb-0.5 hover:border-purple-300 ${pathname === '/profile' && 'border-b-2 pb-0.5 border-purple-500'}`} href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div>
          <ul className="flex items-center gap-3 text-sm font-medium">
            {!user ? (
              <>
                <li
                  onClick={() => googleSignUp()}
                  className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm"
                >
                  <Link href={"/auth/signup"}>SignUp</Link>
                </li>
                <li onClick={() => githubSignUp()} className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm">
                  <Link href={"/auth/signin"}>SignIn</Link>
                </li>
              </>
            ) : (
              <>
                <Avatar>
                  <Avatar.Image
                    alt="userImg"
                    src={user.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <li onClick={() => authClient.signOut()} className="bg-linear-to-r from-pink-400 via-purple-500 bg-red-400 px-3 py-1 text-white rounded-sm">
                  <Link href='/'>Sign Out</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
