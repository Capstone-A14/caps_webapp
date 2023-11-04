import React from "react";
import Image from "next/image";
import { Device } from "@svg/svgindex";

export function CardAlat({ device }) {
  return (
    <div className="flex flex-col basis-1/3 bg-white rounded-lg p-4 gap-3">
      <header className="flex flex-inline items-center rounded-lg">
        <Image src={Device} className="" alt="" />
        <h1> {device.id} </h1>
      </header>
      <p> Terpasang pada pasien: {device.name} </p>
      <button className="text-[13px] font-semibold bg-blue overflow-hidden rounded-lg py-1 px-5 text-white">
        Detail Pasien
      </button>
    </div>
  );
}

export default function DaftarAlat( {device} ) {
  return (
    <div className="inside-container">
      <h1 className="text-white">Daftar Alat</h1>

      <div className="mt-2 grid xsm:grid-cols-2 md:grid-cols-3 gap-2">
        {device.map((device) => (
          <CardAlat key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
}
