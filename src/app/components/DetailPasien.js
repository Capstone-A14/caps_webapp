"use client";
import React, { useState } from "react";
import Modal from "@components/modal/layout.js";
import { EditPatient, DeletePatient, ChartEcg } from "@components/index.js";
import {
  UserIcon,
  TrashIcon,
  PencilSquareIcon,
  ChevronRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import {
  Duduk,
  Jalan,
  Jatuh,
  Tidur,
  Berdiri,
  ECG,
  NoActivity,
} from "@svg/svgindex";

function getDateandTime(timestamp) {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(timestamp);
  const hour = date.toLocaleString("id-ID", options);
  return hour;
}

function getDateandDay(timestamp) {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date_ = new Date(timestamp);
  const date = date_.toLocaleDateString("id-ID", options);
  return date;
}

function getPatientAge(timestamp) {
  const date_ = new Date(timestamp);
  const date = date_.getFullYear();
  const today_ = new Date();
  const today = today_.getFullYear();
  const age = today - date;
  return age;
}

// export default function DetailPasien({ patient, ecgData }) {
export default function DetailPasien({ patient }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // FOR SHOWCASE ONLY -- DELETE IF UNNECESSARY
  if (patient.activity === "") {
    patient.activity = "Tidak Ada Kegiatan";
  }

  const activityMap = {
    duduk: Duduk,
    tidur: Tidur,
    berdiri: Berdiri,
    jatuh: Jatuh,
    jalan: Jalan,
    "": NoActivity,
  };
  // console.log(patient);

  const imageObj = activityMap[patient.activity];

  return (
    <>
      <Modal isShow={showEditModal} closeModal={() => setShowEditModal(false)}>
        <EditPatient
          patient={patient}
          closeModal={() => setShowEditModal(false)}
        />
      </Modal>

      <Modal
        isShow={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
      >
        <DeletePatient
          patient={patient}
          closeModal={() => setShowDeleteModal(false)}
        />
      </Modal>

      <div className="m-5 max-h-full flex flex-col gap-3">
        {/* breadcrumbs */}
        <div className="flex flex-row items-center gap-2">
          <Link href="/daftar-pasien">
            <h1 className="hover:text-purple transition duration-200">
              Daftar Pasien
            </h1>
          </Link>
          <ChevronRightIcon className="h-[18px] text-black" />
          <h1>{patient.name}</h1>
        </div>

        <div className="gap-3 flex flex-col">
          {/* Detail Pasien */}
          <div className="bg-white p-4 rounded-lg flex flex-col lg:flex-row gap-2 w-full">
            {/* Main Profil */}
            <div className="my-2 flex flex-col gap-2 ">
              <div className="flex flex-col place-items-center items-center gap-3">
                <UserIcon
                  className={
                    "rounded-full w-[70px] p-3" +
                    (patient.af_detected === 1
                      ? " text-red bg-red/30 border border-red"
                      : " text-blue bg-blue/30 border border-blue ")
                  }
                />
                <div
                  className={
                    "rounded-lg py-1 px-3 font-semibold uppercase m-0.5 font-poppins text-white text-center text-[12px] min-w-min" +
                    (patient.af_detected === 1 ? " bg-red" : " bg-blue ")
                  }
                >
                  {patient.af_detected === 1
                    ? "AF Terdeteksi"
                    : "AF Tidak Terdeteksi"}
                </div>
              </div>

              <div className="grid place-items-center">
                <h1> {patient.name} </h1>
                <h2 className="font-bold">Terakhir Diperbarui</h2>
                <h2 className="text-center">
                  {" "}
                  {getDateandTime(patient.updated_at)}{" "}
                </h2>
              </div>
            </div>

            {/* Detail Profil */}
            <div className="basis-3/4 grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 px-2">
              {[
                [1, "Tanggal Lahir", getDateandDay(patient.dob)],
                [2, "Usia", getPatientAge(patient.dob)],
                [3, "Tanggal Masuk", getDateandDay(patient.created_at)],
                [
                  4,
                  "Gender",
                  patient.gender === "male" ? "Laki-laki" : "Perempuan",
                ],
                [5, "Device", patient.device_id],
                [6, "Posisi Pasien", patient.activity],
              ].map(([key, title, item]) => (
                <label key={key}>
                  {title}
                  <br />
                  <span className="text-sm capitalize"> {item} </span>{" "}
                </label>
              ))}

              <div className="col-span-2 grid grid-cols-2 gap-2">
                <button
                  className="text-sm text-blue flex items-center rounded-lg p-2 hover:bg-blue/10 transition duration-200"
                  onClick={() => {
                    setShowEditModal(true);
                  }}
                >
                  <PencilSquareIcon className="h-3 m-2 text-blue " />
                  Edit
                </button>
                <button
                  className="text-sm text-red flex items-center rounded-lg p-2 hover:bg-red/10 transition duration-200"
                  onClick={() => {
                    setShowDeleteModal(true);
                  }}
                >
                  <TrashIcon className="h-3 m-2 text-red" />
                  Hapus
                </button>
              </div>
            </div>

            {/* Dashboard Grafana */}
            <Link
              href={`${process.env.DASHBOARD_GRAFANA}/d/${patient.dashboard_id}`}
              className="flex flex-col bg-blue rounded-lg text-center w-fit font-semibold text-white p-2"
            >
              <button className="flex flex-col justify-center items-center p-5 gap-2 rounded-lg bg-blue w-full h-full border-dashed border-2 border-blue transition hover:border-2 hover:border-white">
                <Image
                  src={ECG}
                  width={35}
                  height={35}
                  alt="ECG"
                  className="m-2"
                />
                <h1 className="text-center font-bold text-white">
                  Dashboard Grafana
                </h1>
                <label className="text-center text-white">
                  (grafik lebih lengkap)
                </label>
              </button>
            </Link>
          </div>

          {/* EKG */}
          <div className="p-5 bg-white rounded-lg w-full overflow-y-auto">
            <h1>Rekam EKG</h1>
            {/* <ChartEcg ecgData={ecgData}/> */}
            <ChartEcg />
          </div>
        </div>

        {/* <Link
          href={`${urlGrafana}/d/${patient.dashboard_id}`}
          className="flex flex-col bg-blue rounded-lg text-center font-semibold text-white p-2"
        >
          <button className="flex flex-col justify-center items-center p-5 gap-2 rounded-lg bg-blue w-full h-full border-dashed border-2 border-blue transition hover:border-2 hover:border-white">
            <Image src={ECG} width={35} height={35} alt="ECG" className="m-2" />
            Dashboard Grafana
          </button>
        </Link> */}
      </div>
    </>
  );
}

{
  /* <div
  className={
    "col-span-2 flex flex-row gap-2 items-center rounded-lg p-2 capitalize font-poppins" +
    (patient.activity === "duduk"
      ? " bg-orange/30 border border-orange text-dark_blue"
      : "") +
    (patient.activity === "berdiri" ? " bg- " : "") +
    (patient.activity === "tidur" ? "bg-purple " : "") +
    (patient.activity === "jalan" ? "bg-blue " : "") +
    (patient.activity === "jatuh" ? "bg-red " : "") +
    (patient.activity === "" ? " bg-black text-white " : "")
  }
>
  <Image src={imageObj} width={35} height={35} alt="" className="m-2" />
  {patient.activity === "" ? "Zen" : patient.activity}
</div>; */
}
