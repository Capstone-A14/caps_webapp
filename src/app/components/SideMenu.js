"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logotext from "@/app/assets/logotext.png";
import { HeartIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function SideMenu() {
  return (
    <div className="p-1 md:p-5 w-full fixed md:w-[18%] md:min-h-screen bg-white rounded-t-lg md:rounded-t-none md:rounded-br-lg bottom-0 left-0">
      <div className="hidden md:contents">
        <div className="relative w-[80%] h-[35px] mb-3">
          <Image
            src={Logotext}
            fill
            style={{ objectFit: "contain" }}
            alt="logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="grid gap-1 grid-cols-3 grid-rows-1 md:grid-cols-1 md:grid-rows-3 md:overflow-hidden mt-2">
        <Link href="/" className="btn_sidemenu">
          <HomeIcon className="w-[17px] md:min-w-[22px] lg:min-w-[24px] mx-2" />
          Dashboard
        </Link>

        <Link href="/daftar-pasien" className="btn_sidemenu">
          <UserIcon className="w-[17px] md:min-w-[22px] lg:min-w-[24px]  mx-2" />
          Pasien
        </Link>

        <Link href="/daftar-alat" className="btn_sidemenu">
          <HeartIcon className="w-[17px] md:min-w-[22px] lg:min-w-[24px]  mx-2" />
          Alat
        </Link>
      </div>
    </div>
  );
}
