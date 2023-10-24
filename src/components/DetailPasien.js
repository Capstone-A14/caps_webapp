import React from "react";
import Image from "next/image";

import Person from "@/assets/svg/person.svg";

export default function DetailPasien() {
  const pasien = {
    name: "Wiliam Putra",
    gender: "laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    doctor: "Dr. Andre Wijaya",
    room: "ICU",
    room_no: "12A",
    age: "56",
    blood_type: "A",
  };

  return (
    <div className="inside-container">
      {/* Breadcrumbs */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          <li>
            <a href="/DetailPasien" className="breadcrumb-text">
              Daftar Pasien
            </a>
          </li>
          <li className="breadcrumb-text">/</li>
          <li className="breadcrumb-text">{pasien.name}</li>
        </ol>
      </nav>

      {/* Detail Pasien */}
      <section className="container">
        {/* Sisi Kiri */}
        <div className="centered-items gap-5 w-[25%]">
          <div className="centered-items gap-3">
            <Image
              className="centered-items bg-blue rounded-full p-2 h-[70px] w-[70px]"
              src={Person}
            />
            <div className="stats_tp"> {pasien.status} </div>
          </div>

          <div className="centered-items">
            <h1> {pasien.name} </h1>
            <h2> {pasien.doctor} </h2>
          </div>

          <div className="gap-x-2 flex items-baseline">
            <div className="right-items px-2 min-w-[110px]">
              <label className="text-[12px]"> ruang/nomor </label>
              <h1>
                {" "}
                {pasien.room}/{pasien.room_no}{" "}
              </h1>
            </div>

            <div className="left-items px-2 min-w-[110px]">
              <label className="text-[12px]"> Nomor MR </label>
              <h1> {pasien.mrno} </h1>
            </div>
          </div>
        </div>

        {/* Sisi Kanan */}
        <div className="left-items w-[75%] gap-5">
          <section className="flex items-baseline gap-10">
            <label>
              Tanggal Masuk <br />
              <span className="lbl_detail">{pasien.date_registered}</span>
            </label>

            <label>
              Jenis Kelamin <br />
              <span className="lbl_detail">{pasien.gender}</span>
            </label>

            <label>
              Golongan Darah <br />
              <span className="lbl_detail">{pasien.blood_type}</span>
            </label>

            <label>
              Usia <br />
              <span className="lbl_detail">{pasien.age}</span>
            </label>
          </section>

          <section className="left-items">
            <label> Diagnosis Dokter </label>
            <p>
              Pasien memiliki tekanan darah sistolik rata-rata di atas 140 mmHg
              dan tekanan darah diastolik rata-rata di atas 90 mmHg selama tiga
              kali kunjungan berbeda. Diagnosis hipertensi dibuat setelah
              melakukan pemantauan tekanan darah yang berulang.
            </p>
          </section>
        </div>
      </section>

      <section className="full-justified">
        {/* EKG */}
        <div className="container w-[45%]">
          <h1>Rekam EKG</h1>
          {/* GRAFANA GOES HERE */}
        </div>

        {/* LOG (PENTING???) */}
        <div className="container w-[53%]">
          <h1> Log Aktivitas </h1>
        </div>
      </section>
    </div>
  );
}
