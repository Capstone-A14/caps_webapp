import React from "react";
import Image from "next/image";
import ComponentPasien from "@components/ComponentPasien";
import { Plus } from "@svg/svgindex";
import { data } from "@/app/(withmenu)/page";

export default function DaftarPasien({patient}) {
  return (
    <div className="inside-container">
      <header className="full-justified mb-3">
        <h1 className="breadcrumb-text">Daftar Pasien</h1>
        <button className="rounded-full bg-white px-4 py-1 flex items-baseline gap-x-2">
          <Image src={Plus} alt="" />
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
