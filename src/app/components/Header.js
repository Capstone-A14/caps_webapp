"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ClockIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShieldExclamationIcon,
  ShieldCheckIcon,
  FaceFrownIcon,
} from "@heroicons/react/24/outline";
import localPatient from "@/app/patient.json" assert { type: "json" };
import { fetchPatients } from "@/app/fetch/fetchPatients";

function getHourFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  const jam = date.toLocaleTimeString("en-GB");
  return jam;
}

function SearchDeviceCard({ patient }) {
  return (
    <Link href={`/daftar-pasien/${patient.patient_id}`}>
      <div
        className={
          "w-full h-fit md:w-[500px] md:h-[70px] p-2 my-2 bg-white rounded-lg flex flex-row items-center gap-2 transition duration-200" +
          (patient.af_detected === 1
            ? " hover:bg-red/20 border hover:border-red "
            : " hover:bg-blue/20 border hover:border-blue ")
        }
      >
        {patient.af_detected === 1 ? (
          <ShieldExclamationIcon className="w-6 text-red m-3" />
        ) : (
          <ShieldCheckIcon className="w-6 text-blue m-3" />
        )}

        <div className="w-full">
          <p className="font-semibold capitalize">
            Device ID: {patient.device_id}{" "}
          </p>
          <div className="grid grid-cols-3">
            <label> {patient.name} </label>
            <label>
              {patient.af_detected === 1
                ? "AF Terdeteksi"
                : "AF Tidak Terdeteksi"}
            </label>
            <label> {getHourFromTimestamp(patient.updated_at)} </label>
          </div>
        </div>
      </div>
    </Link>
  );
}

function SearchPatientCard({ patient }) {
  return (
    <Link href={`/daftar-pasien/${patient.patient_id}`}>
      <div
        className={
          "w-full h-fit md:w-[500px] md:h-[70px] p-2 my-2 bg-white rounded-lg flex flex-row items-center gap-2 transition duration-200" +
          (patient.af_detected === 1
            ? " hover:bg-red/20 border hover:border-red "
            : " hover:bg-blue/20 border hover:border-blue ")
        }
      >
        <UserIcon
          className={
            "w-[45px] h-[45px] p-3" +
            (patient.af_detected === 1 ? " text-red " : " text-blue  ")
          }
        />
        <div className="w-full">
          <p className="font-bold capitalize">{patient.name}</p>

          <div className="grid grid-cols-3">
            <label>
              {patient.gender === "male" ? "Laki-laki" : "Perempuan"}
            </label>
            <label>
              {" "}
              {patient.af_detected === 1
                ? "AF Terdeteksi"
                : "AF Tidak Terdeteksi"}
            </label>
            <label>{patient.activity}</label>
          </div>
        </div>
      </div>
    </Link>
  );
}

function SearchNotFound() {
  return (
    <div className="w-full h-fit md:w-[500px] md:h-[70px] p-2 bg-white rounded-lg flex flex-row items-center gap-2 border">
      <FaceFrownIcon className="w-7 text-purple m-2" />
      <p className="font-bold capitalize">
        {" "}
        Pasien atau Device tidak dapat ditemukan!{" "}
      </p>
    </div>
  );
}

export default function Header() {
  const [date, setDate] = useState(new Date());
  const [patient, setPatient] = useState(localPatient);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    fetchPatients()
    .then((patient) => setPatient(patient))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => { 
    const lowerCaseSearch = search.toLowerCase();

    const dataFiltered = patient?.filter((patient) => {
      const matchesName =
        patient.name && patient.name.toLowerCase().includes(lowerCaseSearch);

      const matchesDeviceId =
        typeof patient.device_id === "number" &&
        patient.device_id.toString().includes(lowerCaseSearch);

      return matchesName || matchesDeviceId || lowerCaseSearch === "";
    });

    setFilteredData(dataFiltered)
  }, [search, patient]);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const dateString = date.toLocaleDateString("id-ID", options);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  return (
    <div className="grid grid-cols-3 items-center gap-[2%] bg-white p-3 md:px-5 md:py-3 relative min-h-[60px]">
      {/* SEARCH BOX */}
      <div className="col-span-3 md:col-span-2 relative">
        <div className="py-1 px-2 bg-[#FFFFFF] rounded-lg flex items-center relative">
          <MagnifyingGlassIcon className="w-4 mx-2 text-purple" />
          <input
            className="text-xs border-0 p-1 hover:shadow-none"
            type="text"
            placeholder="Cari pasien ataupun device..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {search && (
          <div className="absolute max-h-[300px] overflow-auto overflow-x-hidden bg-white backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-200 p-2 rounded-lg shadow-md m-2">
            {filteredData?.length > 0 ? (
              filteredData.map((patient) => (
                <div key={patient.patient_id}>
                  <SearchPatientCard patient={patient} />
                  <SearchDeviceCard patient={patient} />
                </div>
              ))
            ) : (
              <SearchNotFound />
            )}
          </div>
        )}
      </div>

      {/* DATE AND TIME */}
      <div className="hidden md:flex col-span-1 items-center gap-2">
        <ClockIcon className="w-5 text-dark_blue" />
        <p> <span className="font-bold">{timeString} </span>{dateString}</p>
      </div>
    </div>
  );
}
