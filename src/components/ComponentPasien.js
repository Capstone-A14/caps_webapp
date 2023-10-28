import React from "react";
import Image from "next/image";
import { Person, Circle } from "@svg/svgindex";

export default function ComponentPasien({ patient }) {
  return (
    <div className="bg-white w-full rounded-lg xsm:p-4 xsm:grid lg:p-2 lg:flex-row lg:flex items-center xsm:gap-2 lg:gap-3">
      <header className="gap-3 xsm:grid xsm:grid-cols-2 md:grid-cols-3 lg:flex-row lg:inline-flex lg:items-start">
        <div className="flex-row flex-auto inline-flex items-start gap-2">
          <Image className="w-[40px] bg-blue p-1 rounded-full" src={Person} />

          <div className="left-items">
            <label className="lbl_nama"> {patient.name} </label>
            <div className="flex-row inline-flex items-baseline gap-1">
              <Image src={Circle} />
              <label> {patient.gender} </label>
            </div>
          </div>
        </div>

        <label className="left-items">
          Status <br />
          <span className="stats_tp text-[10px]"> {patient.status}</span>
        </label>
      </header>

      <section className="xsm:grid xsm:grid-cols-2 md:grid-cols-3 xsm:gap-2 xsm:p-2 lg:p-0 lg:flex lg:flex-inline lg:gap-3 lg:w-[55%]">
        <label className="lg:basis-1/5">
          MR.no <br />
          <span className="lbl_detail"> {patient.mrno} </span>
        </label>

        <label className="lg:basis-1/5">
          Tanggal Masuk <br />
          <span className="lbl_detail"> {patient.date_registered} </span>
        </label>

        <label className="lg:basis-1/4">
          Dokter <br />
          <span className="lbl_detail"> {patient.doctor} </span>
        </label>

        <label className="lg:basis-1/5">
          Ruang/Nomor <br />
          <span className="lbl_detail">
            {" "}
            {patient.room}/{patient.room_no}
          </span>
        </label>

        <label className="">
          Usia <br />
          <span className="lbl_detail"> {patient.age} </span>
        </label>
      </section>

      <button className="btn_detail rounded-lg"> Detail pasien </button>
    </div>
  );
}
