import React from "react";
import Image from "next/image";
import { Person, Circle } from "@svg/svgindex";

export default function ComponentPasien({ patient }) {
  return (
    <div className="bg-white w-full rounded-lg grid grid-cols-1 grid-rows-1 p-3 lg:p-2 lg:grid lg:grid-cols-6 lg:grid-rows-1 items-center lg:gap-x-3">

      <div className="gap-3 grid grid-cols-2 md:grid-cols-3 lg:flex-row lg:inline-flex lg:items-start lg:col-span-2">
        <div className="flex-row flex-auto inline-flex items-start gap-2">
          <Image
            className="w-[40px] bg-blue p-1 rounded-full"
            src={Person}
            alt=""
          />

          <div className="left-items">
            <label className="lbl_nama"> {patient.name} </label>
            <div className="flex-row inline-flex items-baseline gap-1">
              <Image src={Circle} alt="" />
              <label> {patient.gender} </label>
            </div>
          </div>
        </div>

        <label>
          Status <br />
          <span className="stats_tp text-[10px]"> {patient.status}</span>
        </label>
      </div>

      <div className="  grid col-span-2 grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3 lg:p-0 lg:col-span-3">
        <label>
          MR.no <br />
          <span className="lbl_detail"> {patient.mrno} </span>
        </label>

        <label>
          Tanggal Masuk <br />
          <span className="lbl_detail"> {patient.date_registered} </span>
        </label>

        <label>
          Dokter <br />
          <span className="lbl_detail"> {patient.doctor} </span>
        </label>

        <label>
          Ruang/Nomor <br />
          <span className="lbl_detail">
            {patient.room}/{patient.room_no}
          </span>
        </label>
      </div>

      <div className="grid lg:col-span-1">
        <button className="btn_detail rounded-lg"> Aksi </button>
      </div>
    </div>
  );
}
