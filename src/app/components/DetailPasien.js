"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Modal from "@components/modal/layout.js";
import { EditPatient, DeletePatient} from "@components/index.js";
import { UserIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

export default function DetailPasien({ patient }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <>
      <Modal isShow={showEditModal} closeModal={() => setShowEditModal(false)}>
        <EditPatient closeModal={() => setShowEditModal(false)} />
      </Modal>

      <Modal
        isShow={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
      >
        <DeletePatient closeModal={() => setShowDeleteModal(false)} />
      </Modal>

      <div className="inside-container max-h-min">
        {/* Breadcrumbs */}
        <div className="flex justify-between items-center bg-white/10 rounded-lg p-2">
          <ol className="flex space-x-2">
            <li>
              <a href="/daftar-pasien" className="breadcrumb-text">
                Daftar Pasien
              </a>
            </li>
            <li className="breadcrumb-text">/</li>
            <li className="breadcrumb-text">{patient.name}</li>
          </ol>

          <div className="bg-white p-1 rounded-lg grid grid-cols-2 w-[200px]">
            <button className="text-xs text-blue flex items-center rounded-lg hover:bg-blue/10" onClick={() => { setShowEditModal(true); }}>
              <PencilSquareIcon className="h-3 m-2 text-blue " />
              Edit
            </button>
            <button className="text-xs text-red flex items-center rounded-lg hover:bg-red/10" onClick={() => { setShowDeleteModal(true); }}>
              <TrashIcon className="h-3 m-2 text-red" />
              Hapus
            </button>
          </div>
        </div>

        <div className="flex flex-col"></div>
        {/* Detail Pasien */}
        <div className="bg-white mt-5 p-6 rounded-lg flex flex-col md:flex-row gap-y-5 md:gap-x-5">
          {/* Profil */}
          <div className="grid grid-cols-2 gap-2 md:min-w-max">
            <div className="flex flex-col place-items-center items-center row-span-3 md:col-span-2 gap-3">
              <UserIcon className="bg-blue rounded-full p-2 w-[70px] text-white" />
              <div className="stats_tp bg-blue text-white text-center text-[12px]">
                {" "}
                {patient.status}{" "}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 md:grid md:place-items-center">
              <h1> {patient.name} </h1>
              <h2> {patient.doctor} </h2>
            </div>

            <label className="text-[12px] md:text-right">
              {" "}
              ruang/nomor{" "}
              <h1>
                {" "}
                {patient.room}/{patient.room_no}{" "}
              </h1>{" "}
            </label>

            <label className="text-[12px]">
              {" "}
              Nomor MR <h1> {patient.mrno} </h1>{" "}
            </label>
          </div>

          {/* Diagnosis */}
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                ["Tanggal Masuk", patient.date_registered],
                ["Jenis Kelamin", patient.gender],
                ["Golongan Darah", patient.blood_type],
                ["Usia", patient.age],
              ].map(([title, patients]) => (
                <label>
                  {" "}
                  {title} <br />{" "}
                  <span className="lbl_detail"> {patients} </span>{" "}
                </label>
              ))}
            </div>

            <div>
              <label> Diagnosis Dokter </label>
              <p>
                Pasien memiliki tekanan darah sistolik rata-rata di atas 140
                mmHg dan tekanan darah diastolik rata-rata di atas 90 mmHg
                selama tiga kali kunjungan berbeda. Diagnosis hipertensi dibuat
                setelah melakukan pemantauan tekanan darah yang berulang.
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* EKG */}
          <div className="bg-white mt-5 p-6 rounded-lg">
            <h1>Rekam EKG</h1>
            {/* GRAFANA GOES HERE */}
          </div>

          {/* LOG (PENTING???) */}
          {/* <div className="bg-white mt-5 p-6 rounded-lg w-[53%]">
            <h1> Log Aktivitas </h1>
          </div> */}
        </div>
      </div>
    </>
  );
}
