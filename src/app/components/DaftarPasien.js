"use client";
import React, { useMemo, useState } from "react";
import { ComponentPasien, AddPatient } from "@components/index.js";
import { PlusIcon, MagnifyingGlassIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import Modal from "@components/modal/layout.js";
import Pagination from "@components/Pagination";

<<<<<<< Updated upstream
async function fetchPatients(){
    const res = await fetch('http://192.168.1.78:8000/api/v1/patient')
    return res.json()
}

const patientsPromise = fetchPatients()

export default function DaftarPasien() {
=======
export default function DaftarPasien({ patient }) {
>>>>>>> Stashed changes
  const [showAddModal, setShowAddModal] = useState(false);
  const [afDetectedFilter, setAfDetectedFilter] = useState(null);
  const [search, setSearch] = useState("");
  console.log(search);

  const PageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();

    return patient.filter((patient) => {
      const matchesName =
        patient.name && patient.name.toLowerCase().includes(lowerCaseSearch);
      const matchesActivity =
        patient.activity &&
        patient.activity.toLowerCase().includes(lowerCaseSearch);

      // Filter berdasarkan properti patient.af_detected
      const matchesAfDetected =
        afDetectedFilter === null || patient.af_detected === afDetectedFilter;

      return (
        (matchesName || matchesActivity || lowerCaseSearch === "") &&
        matchesAfDetected
      );
    });
  }, [search, patient, afDetectedFilter]);

  // const filteredData = useMemo(() => {
  //   const lowerCaseSearch = search.toLowerCase();

  //   // cari berdasarkan nama aja
  //   // return patient.filter((patient) =>
  //   //   lowerCaseSearch === "" ||
  //   //   (typeof patient === "object" &&
  //   //     patient.name &&
  //   //     typeof patient.name === "string" &&
  //   //     patient.name.toLowerCase().includes(lowerCaseSearch))
  //   // );

  //   // cari berdasarkan nama dan aktivitas
  //   return patient.filter((patient) => {
  //     const matchesName =
  //       patient.name && patient.name.toLowerCase().includes(lowerCaseSearch);
  //     const matchesActivity =
  //       patient.activity &&
  //       patient.activity.toLowerCase().includes(lowerCaseSearch);

  //     return matchesName || matchesActivity || lowerCaseSearch === "";
  //   });

  //   // mencari ke seluruh props
  //   // return patient.filter((patient) => {
  //   //   const matchesSearch = Object.values(patient).some((value) => {
  //   //     if (typeof value === "string") {
  //   //       return value.toLowerCase().includes(lowerCaseSearch);
  //   //     }
  //   //     return false;
  //   //   });

  //   //   return matchesSearch || lowerCaseSearch === "";
  //   // });
  // }, [search, patient]);

  const totalFilteredData = filteredData.length;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const sortedPatient = filteredData
      .slice(0, totalFilteredData)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return sortedPatient.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, filteredData, totalFilteredData]);

  return (
    <>
      <Modal isShow={showAddModal} closeModal={() => setShowAddModal(false)}>
        <AddPatient closeModal={() => setShowAddModal(false)} />
      </Modal>

      <div className="m-5 gap-5">
        <div className="flex justify-between items-center my-1">
          <h1>Daftar Pasien</h1>
        </div>

        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="bg-purple/10 p-2 rounded-lg grid grid-cols-3 gap-x-2 gap-y-1 col-span-3 md:col-span-2">
            <p className="col-span-3 p-2 place-self-center">
              Filter Pasien Berdasarkan:
            </p>
            <button
              className={
                "rounded-lg text-xs p-2 transition duration-200 hover:bg-red hover:text-white hover:font-bold" +
                (afDetectedFilter === 1
                  ? " bg-red text-white font-bold "
                  : " bg-white ")
              }
              onClick={() => {
                setAfDetectedFilter(1);
                setCurrentPage(1);
              }}
            >
              AF Terdeteksi
            </button>
            <button
              className={
                "rounded-lg text-xs p-2 transition duration-200 hover:bg-purple hover:text-white hover:font-bold" +
                (afDetectedFilter === 0
                  ? " bg-purple text-white font-bold "
                  : " bg-white ")
              }
              onClick={() => {
                setAfDetectedFilter(0);
                setCurrentPage(1);
              }}
            >
              AF Tidak Terdeteksi
            </button>
            <button
              className={
                "rounded-lg text-xs p-2 transition duration-200" +
                (afDetectedFilter === null
                  ? " bg-black/20 text-white "
                  : " bg-white ")
              }
              onClick={() => {
                setAfDetectedFilter(null);
                setCurrentPage(1);
              }}
            >
              {afDetectedFilter === null
                ? "Coba filter!"
                : "Tampilkan seluruh pasien"}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 col-span-3 md:col-span-1">
            <button
              className="bg-white text-purple border transition duration-200 hover:border hover:border-blue hover:bg-blue/5 flex w-full items-center rounded-lg p-2 text-sm h-full"
              onClick={() => {
                setShowAddModal(true);
              }}
            >
              <PlusIcon className="h-4 mx-2 text-purple" />
              Tambah Pasien
            </button>
            <div className="p-2 bg-white rounded-lg flex items-center">
              <MagnifyingGlassIcon className="w-4 mx-2 text-purple" />
              <input
                className="text-xs border-0 p-1 hover:shadow-none"
                type="text"
                placeholder="Cari pasien berdasarkan nama atau kegiatan..."
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="col-span-3 grid gap-1">
            {currentTableData.length > 0 ? (
              currentTableData
                .filter((patient) => {
                  const lowerCaseSearch = search.toLowerCase();
                  return (
                    Object.values(patient).some((value) => {
                      if (typeof value === "string") {
                        return value.toLowerCase().includes(lowerCaseSearch);
                      }
                      return false;
                    }) || lowerCaseSearch === ""
                  );
                })
                .map((patient) => {
                  console.log(patient);
                  return (
                    <ComponentPasien
                      key={patient.patient_id}
                      patient={patient}
                    />
                  );
                })
            ) : (
              <div className="border border-dotted border-purple rounded-lg h-[200px] gap-2 grid place-content-center place-items-center">
                <FaceFrownIcon className="w-10 text-purple"/>
                <h1 className="capitalize ">pasien tidak ditemukan</h1>
              </div>
              
            )}
          </div>

          <div className="p-2 md:w-fit col-span-3 md:place-self-end">
            <Pagination
              currentPage={currentPage}
              totalCount={totalFilteredData}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
