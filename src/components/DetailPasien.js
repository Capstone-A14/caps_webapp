import React from "react";
import Image from "next/image";
import { Person } from "@svg/svgindex";

export default function DetailPasien({patient}) {
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
          <li className="breadcrumb-text">{patient.name}</li>
        </ol>
      </nav>

      {/* Detail Pasien */}
      <section className="container flex xsm:flex-col md:flex-row">
        {/* Sisi Kiri */}
        <div className="centered-items gap-3">
          <div className="centered-items gap-3">
            <Image
              className="centered-items bg-blue rounded-full p-2 h-[70px] w-[70px]"
              src={Person} alt=""
            />
            <div className="stats_tp"> {patient.status} </div>
          </div>

          <div className="centered-items">
            <h1> {patient.name} </h1>
            <h2> {patient.doctor} </h2>
          </div>

          <div className="gap-x-2 flex items-baseline">
            <div className="right-items px-2 min-w-[110px]">
              <label className="text-[12px]"> ruang/nomor </label>
              <h1>
                {" "}
                {patient.room}/{patient.room_no}{" "}
              </h1>
            </div>

            <div className="left-items px-2 min-w-[110px]">
              <label className="text-[12px]"> Nomor MR </label>
              <h1> {patient.mrno} </h1>
            </div>
          </div>
        </div>

        {/* Sisi Kanan */}
        <div className="left-items md:basis-3/4">
          <section className="flex items-baseline gap-10">
            <label>
              Tanggal Masuk <br />
              <span className="lbl_detail">{patient.date_registered}</span>
            </label>

            <label>
              Jenis Kelamin <br />
              <span className="lbl_detail">{patient.gender}</span>
            </label>

            <label>
              Golongan Darah <br />
              <span className="lbl_detail">{patient.blood_type}</span>
            </label>

            <label>
              Usia <br />
              <span className="lbl_detail">{patient.age}</span>
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
