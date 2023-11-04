"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CardAlat } from "@components/DaftarAlat";
import { CirclePlus } from "@svg/svgindex.js";
import { ComponentPasien, AddPatient } from "@components/index.js";
import Modal from "@components/modal/layout.js";

function ListPatient() {
  return (
    <div className="mt-1 bg-orange p-2 rounded-lg">
      <p>Nama Pasien</p>
    </div>
  );
}

export default function Dashboard({ patient, device }) {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <Modal isShow={showAddModal} closeModal={() => setShowAddModal(false)}>
        <AddPatient closeModal={() => setShowAddModal(false)} />
      </Modal>

      <div className="inside-container">
        <div className="rounded-lg bg-purple w-full p-6">
          <h1 className="text-[20px] text-white"> Halo! </h1>
        </div>

        <div className="my-5">
          <h1 className="text-white text-[18px]">Overview</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-2">
            <button
              className="bg-purple md:col-span-2 lg:col-span-1 rounded-lg text-center font-semibold text-white p-2"
              onClick={() => {
                setShowAddModal(true);
              }}
            >
              <div className="flex justify-center items-center p-5 gap-2 rounded-lg bg-purple w-full h-full border-dashed border-2 border-purple transition hover:border-2 hover:border-dashed hover:border-white">
                <Image src={CirclePlus} width={25} height={25} alt="" />
                Tambah Pasien
              </div>
            </button>

            <div className="bg-purple/20 border border-purple/25 rounded-lg p-4 transition duration-200 hover:bg-purple/50">
              <h1 className="text-white">Total Pasien</h1>
              <p className="text-white text-[40px] font-bold">34</p>
            </div>

            <div className="bg-purple/20 border border-purple/25 rounded-lg p-4 transition duration-200 hover:bg-purple/50">
              <h1 className="text-white">Alat Digunakan</h1>
              <p className="text-white text-[40px] font-bold">4</p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-white text-[18px] my-2">Pasien</h1>
          <section className="grid gap-2">
            {patient.map((patient) => (
              <ComponentPasien key={patient.id} patient={patient} />
            ))}
          </section>
        </div>

        <div className="my-5">
          <h1 className="text-white text-[18px] my-2">Alat</h1>
          <section className="grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {device.map((device) => (
              <CardAlat key={device.id} device={device} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
