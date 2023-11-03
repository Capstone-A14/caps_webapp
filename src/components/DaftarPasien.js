"use client";
import React, { useState } from "react";
import { ComponentPasien, AddPatient } from "@/components/index.js";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "@components/modal/layout.js";

export default function DaftarPasien({ patient }) {
  const [showAddModal, setShowAddModal] = useState(false);
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
            <PlusIcon className="w-4"/>
            Tambah Pasien
          </button>
        </header>

        <section className="grid xsm:grid-row-1 gap-3">
          <ComponentPasien patient={patient} />
          <ComponentPasien patient={patient} />
        </section>
      </div>
    </>
  );
}
