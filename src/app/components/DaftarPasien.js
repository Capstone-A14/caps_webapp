"use client";
import React, { useState, use } from "react";
import { ComponentPasien, AddPatient } from "@components/index.js";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "@components/modal/layout.js";

async function fetchPatients(){
    const res = await fetch('http://localhost:8000/api/v1/patient')
    return res.json()
}

const patientsPromise = fetchPatients()

export default function DaftarPasien() {
  const [showAddModal, setShowAddModal] = useState(false);
  const patients = use(patientsPromise).patients;
  return (
    <>
      <Modal isShow={showAddModal} closeModal={() => setShowAddModal(false)}>
        <AddPatient closeModal={() => setShowAddModal(false)} />
      </Modal>

      <div className="inside-container">
        <header className="full-justified mb-3">
          <h1 className="breadcrumb-text">Daftar Pasien</h1>
          <button
            className="rounded-full font-bold bg-white px-4 py-1 flex items-center gap-x-2 text-[12px] transition duration-200 hover:ring-2 hover:ring-purple hover:ring-offset-2 hover:ring-offset-dark_blue "
            onClick={() => {
              setShowAddModal(true);
            }}
          >
            <PlusIcon className="w-4" />
            Tambah Pasien
          </button>
        </header>

        <section className="grid xsm:grid-row-1 gap-3">
          {patients.map((patient) => (
            <ComponentPasien key={patient.id} patient={patient} />
          ))}
        </section>
      </div>
    </>
  );
}
