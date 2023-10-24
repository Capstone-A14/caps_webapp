import React from "react";
import Image from "next/image";
import ComponentPasien from "./ComponentPasien";
import Plus from "@/assets/svg/plus.svg";

export default function DaftarPasien() {
  const pasien = {
    name: "Wiliam Putra",
    gender: "laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    dokter: "Dr. Andre Wijaya",
    ruang: "ICU",
    nomor: "12A",
    usia: "56",
  };

  return (
    <div className="inside-container">
      <header className="full-justified">
        <h1 className="breadcrumb-text">Daftar Pasien</h1>
        <button className="rounded-full bg-white px-4 py-1 flex items-baseline gap-x-2">
          <Image src= {Plus} />
          <h2 className="font-bold"> Tambah Pasien </h2>
        </button>
      </header>

      <ComponentPasien />
    </div>
  );
}
