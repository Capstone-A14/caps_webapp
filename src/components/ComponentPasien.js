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
    <div>
      <div className="mt-2 bg-white p-3 w-[100%] rounded-lg inline-flex flex-row flex items-center">
        <div className="w-[20%] gap-2 flex-row inline-flex items-start">
          <div className="bg-blue p-1 rounded-full">
            <Image src={Person} />
          </div>

          <div className="flex-col inline-flex items-start">
            <label className="lbl_nama"> {patient.name} </label>
            <div className="flex-row inline-flex items-baseline gap-1">
              <Image src={Circle} />
              <label> {patient.gender} </label>
            </div>
          </div>
        </div>

        <div className="w-[8%] flex-col inline-flex items-start">
          <label> MR.no </label>
          <label className="lbl_detail"> {patient.mrno} </label>
        </div>

        <div className="w-[15%] flex-col inline-flex items-start">
          <label> Tanggal Masuk </label>
          <label className="lbl_detail"> {patient.date_registered} </label>
        </div>

        <div className="w-[18%] flex-col inline-flex items-start">
          <label> Status </label>
          <div className="stats_tp text-[10px]"> {patient.status} </div>
        </div>

        <div className="w-[18%] flex-col inline-flex items-start">
          <label> Dokter </label>
          <label className="lbl_detail"> {patient.doctor} </label>
        </div>

        <div className="w-[14%] flex-col inline-flex items-start">
          <label> Ruang/Nomor </label>
          <label className="lbl_detail">
            {" "}
            {patient.room}/{patient.room_no}{" "}
          </label>
        </div>

        <div className="w-[5%] flex-col inline-flex items-start">
          <label> Usia </label>
          <label className="lbl_detail"> {patient.age} </label>
        </div>

        <button className="btn_detail"> Detail pasien </button>
      </div>
    </div>
  );
}
