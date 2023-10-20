import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { Pasien, Dashboard, Device} from "@/assets/svg";
import People from "../assets/svg/people.svg";
import Dashboard from "@/assets/svg/dashboard.svg";
import Device from "@/assets/svg/device.svg";

export default function SideMenu() {
  const rumahsakit = {
    name: "RUMAH SAKIT HARAPAN",
    ruang: "ICU",
  };

  return (
    <div className="p-5 min-h-screen  bg-white rounded-br-lg">
      <div className="pb-5">
        <h1 className="text-[12px] text-blue"> {rumahsakit.name} </h1>
      </div>

      <h2 className="text-blue"> Ruang </h2>
      <h1 className="text-blue text-[20px]"> {rumahsakit.ruang} </h1>

      <div className="mt-2">
        <button className="btn_sidemenu">
          <Image src={Dashboard} />
          <p className="text-blue"> Dashboard </p>
        </button>

        <button className="btn_sidemenu">
          <Image src={People} />
          <p className="text-blue"> Daftar Pasien </p>
        </button>

        <button className="btn_sidemenu">
          <Image src={Device} />
          <p className="text-blue"> Alat </p>
        </button>
      </div>
    </div>
  );
}
