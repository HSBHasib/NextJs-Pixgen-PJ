"use client";
import { Avatar, Button, Card } from "@heroui/react";
import { Mail, ShieldCheck, MapPin, Calendar, Edit3 } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { authClient } from "@/lib/auth-client";
import EditProfileInfo from "@/components/ModalEditProfile";

function ProfilePage() {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  {
    isPending && (
      <>
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-secondary text-4xl font-extrabold"></span>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center pt-5 px-4">
      <h1 className="text-3xl font-bold mb-4">Profile Card</h1>
      <Card className="w-[70vh] max-w-md p-0 border border-gray-100 shadow-2xl rounded-2xl overflow-hidden bg-white">
        {/* Banner Decor */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 w-full" />

        <div className="px-8 pb-8">
          {/* Avatar Shifted Up */}
          <div className="relative -mt-16 mb-4 flex justify-between items-end">
            <Avatar className="w-32 h-32 text-large border-4 border-white shadow-lg">
              <Avatar.Image alt="userImg" src={user?.image} />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <Button
              isIconOnly
              variant="flat"
              className="bg-gray-100 hover:bg-gray-200 rounded-full"
            >
              {/* Edit Proile Info */}
              <EditProfileInfo />
            </Button>
          </div>

          {/* User Info */}
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                {user?.name}
              </h2>
              <ShieldCheck size={20} className="text-blue-500" />
            </div>
            <p className="text-gray-500 font-medium">
              Digital Creator & AI Enthusiast
            </p>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gray-100 my-6" />

          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-4 text-left">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} className="text-gray-400" />
              <span className="text-sm font-medium">{user?.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={18} className="text-gray-400" />
              <span className="text-sm font-medium">Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar size={18} className="text-gray-400" />
              <span className="text-sm font-medium">
                {/* Format: "Joined April 2026" */}
                Joined {format(new Date(), "MMMM yyyy")}
              </span>
            </div>
          </div>

          <Link href="/all-photos">
            <Button className="w-full mt-8 bg-black text-white font-bold h-12 rounded-2xl shadow-xl">
              View My Gallery
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default ProfilePage;
