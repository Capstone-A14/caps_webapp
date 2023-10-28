import React from "react";
import Link from "next/link";
import Image from "next/image";
import { People, Dashboard, Device } from "@/assets/svg/svgindex";
import Logo from "@/assets/logo.png";
import Logotext from "@/assets/logotext.png";

export default function SideMenu() {
  const rumahsakit = {
    name: "RUMAH SAKIT HARAPAN",
    ruang: "Kebidanan",
  };

  return (
    <div className="xsm:overflow-clip p-5 min-h-screen fixed md:w-[20%] xsm:w-[15%] bg-white rounded-br-lg">
      <div className="xsm:centered-items md:left-items">
        <div style={{ position: "relative", width: "80%",paddingBottom: "20%", marginBottom: "20px",}}>
          <div className="xsm:hidden md:contents">
            <Image
              src={Logotext.src}
              fill
              style={{ objectFit: "contain" }}
              alt="logo"
            />
          </div>

          <div className="xsm:contents md:hidden">
            <Image
              src={Logo.src}
              fill
              style={{ objectFit: "contain" }}
              alt="logo"
            />
          </div>
        </div>
      </div>

      <h2 className="xsm:hidden md:contents text-dark_blue"> Ruang </h2>
      <h1 className="xsm:centered-items md:left-items text-dark_blue text-[12px] md:text-[20px]">
        {" "}
        {rumahsakit.ruang}{" "}
      </h1>

      <menu className="md:overflow-hidden mt-2">
        <button className="xsm:btn_sidemenu-xsm md:btn_sidemenu">
          <Image src={Dashboard} />
          <p className="xsm:hidden md:contents truncate text-dark_blue">
            {" "}
            Dashboard{" "}
          </p>
        </button>

        <button className="xsm:btn_sidemenu-xsm md:btn_sidemenu">
          <Image src={People} />
          <p className="xsm:hidden md:contents truncate text-dark_blue">
            {" "}
            Pasien{" "}
          </p>
        </button>

        <button className="xsm:btn_sidemenu-xsm md:btn_sidemenu">
          <Image src={Device} />
          <p className="xsm:hidden md:contents truncate text-dark_blue">
            {" "}
            Alat{" "}
          </p>
        </button>
      </menu>
    </div>
  );
}
