import React from "react";
import Image from "next/image";
import { Device } from "@svg/svgindex";

export function CardAlat({patient, device}) {
  return (
    <div className="flex flex-col basis-1/3 bg-white rounded-lg p-4 gap-3">
      <header className="flex flex-inline items-center bg-light_blue_25 rounded-lg">
        <Image src={Device} className="" alt="" />
        <h1> {device.id} </h1>
      </header>
      <p> Terpasang pada pasien: {patient.name} </p>
      <button className="btn_detail rounded-lg w-full py-2">
        Detail Pasien
      </button>
    </div>
  );
}

export default function DaftarAlat({patient, device}) {
  return (
    <div className="inside-container">
      <h1 className="text-white">Daftar Alat</h1>

      <div className="mt-2 grid xsm:grid-cols-2 md:grid-cols-3 gap-2">
        <CardAlat patient={patient} device={device}/>
        <CardAlat patient={patient} device={device}/>
        <CardAlat patient={patient} device={device}/>
        <CardAlat patient={patient} device={device}/>
      </div>
    </div>
  );
}
