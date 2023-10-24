import React from "react";
import Image from "next/image";

import Person from "@/assets/svg/person.svg";
import Circle from "@/assets/svg/circle.svg";

export default function ComponentPasien() {
  const patient = {
    name: "Wiliam Putra",
    gender: "laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    doctor: "Dr. Andre Wijaya",
    room: "ICU",
    room_no: "12A",
    age: "56",
  };

  return (
    <div className="mt-2 bg-white p-3 w-[100%] rounded-lg inline-flex flex-row flex items-center">
      <div className="w-[20%] gap-2 flex-row inline-flex items-start">
        <Image className="w-[40px] bg-blue p-1 rounded-full" src={Person} />

        <div className="flex-col inline-flex items-start">
          <label className="lbl_nama"> {patient.name} </label>
          <div className="flex-row inline-flex items-baseline gap-1">
            <Image src={Circle} />
            <label> {patient.gender} </label>
          </div>
        </div>
      </div>

      <label className="w-[8%]">
        MR.no <br />
        <span className="lbl_detail"> {patient.mrno} </span>
      </label>

      <label className="w-[15%]">
        Tanggal Masuk <br />
        <span className="lbl_detail"> {patient.date_registered} </span>
      </label>

      <label className="w-[18%]">
        Status <br />
        <span className="stats_tp text-[10px]"> {patient.status}</span>
      </label>

      <label className="w-[18%]">
        Dokter <br />
        <span className="lbl_detail"> {patient.doctor} </span>
      </label>

      <label className="w-[14%]">
        Ruang/Nomor <br />
        <span className="lbl_detail">
          {" "}
          {patient.room}/{patient.room_no}
        </span>
      </label>

      <label className="w-[5%]">
        Usia <br />
        <span className="lbl_detail"> {patient.age} </span>
      </label>

      <button className="btn_detail"> Detail pasien </button>
    </div>
  );
}
