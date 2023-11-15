"use client";
import React, { useMemo, useState } from "react";
import { CardAlat } from "@components/index.js";
import Pagination from "@components/Pagination";
import {
  MagnifyingGlassIcon,
  FaceFrownIcon,
} from "@heroicons/react/24/outline";

export default function DaftarAlat({ patient }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const PageSize = 6;

  const filteredData = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();

    return patient.filter((patient) => {
      const matchesName =
        patient.name && patient.name.toLowerCase().includes(lowerCaseSearch);
      const matchesDeviceId =
        typeof patient.device_id === "number" &&
        patient.device_id.toString().includes(lowerCaseSearch);

      return matchesName || matchesDeviceId || lowerCaseSearch === "";
    });
  }, [search, patient]);

  const totalFilteredData = filteredData.length;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const sortedPatient = filteredData.sort((a, b) => {
      if (a.device_id === null && b.device_id === null) {
        return a.name.localeCompare(b.name);
      } else if (a.device_id === null) {
        return 1;
      } else if (b.device_id === null) {
        return -1;
      }

      const deviceC = a.device_id - b.device_id;

      if (deviceC === 0) {
        return a.name.localeCompare(b.name);
      }

      return deviceC;
    });
    return sortedPatient.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, filteredData, totalFilteredData]);

  return (
    <div className="m-5 gap-5">
      <h1>Daftar Alat</h1>

      <div className="mt-2 grid gap-2">
        <div className="p-2 bg-white rounded-lg flex items-center">
          <MagnifyingGlassIcon className="w-4 mx-2 text-purple" />
          <input
            className="text-xs border-0 p-1 hover:shadow-none"
            type="text"
            placeholder="Cari device berdasarkan device id atau nama pasien..."
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {currentTableData.length > 0 ? (
            currentTableData
              .filter((patient) => {
                const lowerCaseSearch = search.toLowerCase();
                return (
                  Object.values(patient).some((value) => {
                    if (typeof value === "string" || typeof value === "number") {
                      return value
                        .toString()
                        .toLowerCase()
                        .includes(lowerCaseSearch);
                    }
                    return false;
                  }) || lowerCaseSearch === ""
                );
              })
              .map((patient) => {
                return <CardAlat key={patient.patient_id} patient={patient} />;
              })
          ) : (
            <div className="col-span-2 md:col-span-3 border border-dotted border-purple rounded-lg h-[200px] gap-2 grid place-content-center place-items-center">
              <FaceFrownIcon className="w-10 text-purple" />
              <h1 className="capitalize ">
                device ataupun pasien tidak dapat ditemukan
              </h1>
            </div>
          )}
        </div>

        <div className="p-2 w-full md:w-fit place-self-start md:place-self-center">
          <Pagination
            currentPage={currentPage}
            totalCount={totalFilteredData}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
