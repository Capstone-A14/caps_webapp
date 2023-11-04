"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { People, Dashboard, Device } from "@svg/svgindex";
import Logo from "@/app/assets/logo.png";
import Logotext from "@/app/assets/logotext.png";

export default function SideMenu() {
  const rumahsakit = {
    ruang: "Kebidanan",
  };

  const menuItems = [
    { id: 1, icon: Dashboard, label: "Dashboard", url: "/" },
    { id: 2, icon: People, label: "Pasien", url: "/daftar-pasien" },
    { id: 3, icon: Device, label: "Alat", url: "/daftar-alat" },
  ];

  return (
    <div className="overflow-clip p-1 md:p-5 md:w-[20%] md:min-h-screen md:fixed bg-white rounded-t-lg md:rounded-t-none md:rounded-br-lg">
      <header className="hidden md:contents">
        <div className="hidden md:contents">
          <div
            style={{
              position: "relative",
              width: "80%",
              paddingBottom: "20%",
              marginBottom: "20px",
            }}
          >
            <div className="hidden md:contents">
              <Image
                src={Logotext.src}
                fill
                style={{ objectFit: "contain" }}
                alt="logo"
              />
            </div>

            <div className="contents md:hidden">
              <Image
                src={Logo.src}
                fill
                style={{ objectFit: "contain" }}
                alt="logo"
              />
            </div>
          </div>
        </div>

        <h2 className="hidden md:contents text-dark_blue"> Ruang </h2>
        <h1 className="text-dark_blue hidden md:contents whitespace-nowrap overflow-hidden overflow-ellipsis ">
          <br /> {rumahsakit.ruang}
        </h1>
      </header>

      <menu className="grid gap-1 grid-cols-3 grid-rows-1 md:grid-cols-1 md:grid-rows-3 md:overflow-hidden mt-2">
        {menuItems.map((menuItem, index) => (
          <Link
            key={index}
            className="btn_sidemenu whitespace-nowrap overflow-hidden overflow-ellipsis"
            href={menuItem.url}
          >
            <Image src={menuItem.icon} alt="" />
            <p className="xsm:hidden md:contents text-dark_blue">
              {menuItem.label}
            </p>
          </Link>
        ))}
      </menu>
    </div>
  );
}
