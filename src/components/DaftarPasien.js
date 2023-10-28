import React from "react";
import Image from "next/image";
import ComponentPasien from "@components/ComponentPasien";
import { Plus } from "@svg/svgindex";

export default function DaftarPasien({patient}) {
  // const patient = {
  //   name: "Wiliam Putra",
  //   gender: "laki-laki",
  //   mrno: "123827",
  //   date_registered: "09/01/2023",
  //   status: "Tanpa Pengawasan",
  //   doctor: "Dr. Andre Wijaya",
  //   room: "ICU",
  //   room_no: "12A",
  //   age: "56",
  // };

  return (
    <div className="inside-container">
      <header className="full-justified mb-3">
        <h1 className="breadcrumb-text">Daftar Pasien</h1>
        <button className="rounded-full bg-white px-4 py-1 flex items-baseline gap-x-2">
          <Image src={Plus} />
          <h2 className="font-bold"> Tambah Pasien </h2>
        </button>
      </header>

      <section className="grid xsm:grid-row-1 gap-3">
        <ComponentPasien patient={patient} />
        <ComponentPasien patient={patient} />
      </section>
    </div>
  );
}
