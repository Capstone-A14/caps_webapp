"use client";
import React from "react";
import Link from "next/link";
import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

export default function CardAlat({ patient }) {
  return (
    <div className= "grid grid-rows-4 bg-white rounded-lg p-4 gap-3 border"    >
      <div className="row-span-3">
        <header className="flex flex-inline items-center rounded-lg">
          {patient.af_detected === 1 ? (
            <ShieldExclamationIcon className="w-6 text-red m-3" />
          ) : (
            <ShieldCheckIcon className="w-6 text-blue m-3" />
          )}
          <h1>ID Device {patient.device_id} </h1>
        </header>

        <p>
          Terpasang pada pasien: <b>{patient.name}</b>
        </p>
        <p>
          Status pasien:{" "}
          <b>
            {patient.af_detected === 1
              ? "AF Terdeteksi"
              : "AF Tidak Terdeteksi"}
          </b>
        </p>
      </div>
      <div className="">
        <Link href={`/daftar-pasien/${patient.patient_id}`}>
          <button
            className={
              "text-[13px] font-semibold overflow-hidden rounded-lg py-1 px-5 text-white transition duration-200" +
              (patient.af_detected === 1
                ? " bg-red hover:bg-red/80 border border-red"
                : "") +
              (patient.af_detected !== 1
                ? " bg-blue hover:bg-blue/80 border border-blue"
                : "")
            }
          >
            Detail Pasien
          </button>
        </Link>
      </div>
    </div>
  );
}
