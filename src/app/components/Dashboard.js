"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ComponentPasien, AddPatient, CardAlat } from "@components/index.js";
import Modal from "@components/modal/layout.js";
import {
  ChevronDoubleRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard({ patient }) {
// export default function Dashboard() {
  // const [patient, setPatient] = useState();
  const [showAddModal, setShowAddModal] = useState(false);

  const [totalPatient, setTotalPatient] = useState(0);
  const [totalAF, setTotalAF] = useState(0);

  // useEffect(() => {
  //   fetch(`${process.env.PATIENT_API}/api/v1/patient`)
  //     .then((res) => res.json())
  //     .then((patient) => setPatient(patient))
  //     .catch((error) => console.error("Error fetching patient data:", error));
  // }, []);
  // console.log(patient);

  useEffect(() => {
    if (patient && patient.length) {
      setTotalPatient(patient.length);
    }
  }, [patient]);

  useEffect(() => {
    if (patient && patient.length) {
      const patientsWithAF = patient?.filter(
        (patient) => patient.af_detected === 1
      );
      setTotalAF(patientsWithAF.length);
    }
  }, [patient]);

  return (
    <>
      <Modal isShow={showAddModal} closeModal={() => setShowAddModal(false)}>
        <AddPatient closeModal={() => setShowAddModal(false)} />
      </Modal>

      <div className="m-5 gap-5">
        <div className="rounded-lg bg-purple w-full p-6">
          <h1 className="text-[20px] text-white mb-2">Halo!</h1>
          <p className=" text-base font-semibold text-white">
            {" "}
            Capstone A-14: Cardimetry
          </p>
          <p className="font-semibold text-white">
            Aplikasi ini merupakan aplikasi monitoring detak jantung untuk
            menemukan gejala Atrial Fibrilation pada seorang pasien.{" "}
          </p>
        </div>

        <div className="my-5">
          <h1 className="text-[18px]">Overview</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-2">
            <button
              className="h-full bg-purple md:col-span-2 lg:col-span-1 rounded-lg text-center font-semibold text-white p-2"
              onClick={() => {
                setShowAddModal(true);
              }}
            >
              <div className="flex justify-center items-center p-5 gap-2 rounded-lg bg-purple w-full h-full border-dashed border-2 border-purple transition duration-200 hover:border-2 hover:border-dashed hover:border-white">
                <PlusCircleIcon className="w-8 text-white" />
                Tambah Pasien
              </div>
            </button>

            <Link href="/daftar-pasien">
              <div className="h-full bg-purple/90 border border-purple/25 rounded-lg p-4 transition duration-200 hover:bg-purple/70">
                <h1 className="text-white">Total Pasien</h1>
                <h1 className="text-white text-[40px] font-bold">
                  {totalPatient}
                </h1>
              </div>
            </Link>

            <div className="h-full bg-red/90 border border-red/25 rounded-lg p-4 transition duration-200 hover:bg-red/70">
              <h1 className="text-white">Pasien dengan AF Terdeteksi</h1>
              <h1 className="text-white text-[40px] font-bold">{totalAF}</h1>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="flex justify-between">
            <h1 className="text-[18px] my-2">Pasien Terbarui</h1>

            <Link
              href="/daftar-pasien"
              className="flex items-center place-items-end text-black transition duration-200 hover:text-purple rounded-lg font-poppins text-sm font-bold px-4 gap-2"
            >
              Lihat Daftar Lengkap
              <ChevronDoubleRightIcon className="w-5" />
            </Link>
          </div>

          <div className="grid gap-2">
            {patient?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
              .slice(0, 5)
              .map((patient) => (
                <ComponentPasien key={patient.patient_id} patient={patient} />
              ))}
          </div>
        </div>

        <div className="my-5">
          <div className="flex justify-between">
            <h1 className="text-[18px] my-2">Alat Terbarui</h1>
            <Link
              href="/daftar-alat"
              className="flex items-center place-items-end text-black transition duration-200 hover:text-purple rounded-lg font-poppins text-sm font-bold px-4 gap-2"
            >
              Lihat Daftar Lengkap
              <ChevronDoubleRightIcon className="w-5" />
            </Link>
          </div>
          <section className="grid xsm:grid-cols-2 md:grid-cols-3 gap-3">
            {patient?.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
              .slice(0, 6)
              .map((patient) => (
                <CardAlat key={patient.patient_id} patient={patient} />
              ))}
          </section>
        </div>
      </div>
    </>
  );
}
