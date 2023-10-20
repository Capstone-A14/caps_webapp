import React from "react";
import ComponentPasien from "./ComponentPasien";

export default function DaftarPasien() {
  const pasien = {
    name: "Wiliam Putra",
    gender: "laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    dokter: "Dr. Andre Wijaya",
    ruang: "ICU",
    nomor: "12A",
    usia: "56",
  };

  return (
    <div className="inside-container">
      <div className="mb-2 flex items-baseline justify-between">
        <h1 className="breadcrumb-text">Daftar Pasien</h1>
        <button className="rounded-full bg-white px-3 flex items-baseline gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M14.7498 6.41669H10.5832V2.25002C10.5832 1.69749 10.3637 1.16758 9.97298 0.776881C9.58227 0.38618 9.05237 0.166687 8.49984 0.166687C7.9473 0.166687 7.4174 0.38618 7.0267 0.776881C6.636 1.16758 6.4165 1.69749 6.4165 2.25002L6.49046 6.41669H2.24984C1.6973 6.41669 1.1674 6.63618 0.776698 7.02688C0.385997 7.41758 0.166504 7.94749 0.166504 8.50002C0.166504 9.05255 0.385997 9.58246 0.776698 9.97316C1.1674 10.3639 1.6973 10.5834 2.24984 10.5834L6.49046 10.5094L6.4165 14.75C6.4165 15.3026 6.636 15.8325 7.0267 16.2232C7.4174 16.6139 7.9473 16.8334 8.49984 16.8334C9.05237 16.8334 9.58227 16.6139 9.97298 16.2232C10.3637 15.8325 10.5832 15.3026 10.5832 14.75V10.5094L14.7498 10.5834C15.3024 10.5834 15.8323 10.3639 16.223 9.97316C16.6137 9.58246 16.8332 9.05255 16.8332 8.50002C16.8332 7.94749 16.6137 7.41758 16.223 7.02688C15.8323 6.63618 15.3024 6.41669 14.7498 6.41669Z"
              fill="#1D3557"
            />
          </svg>
          <h1 className="text-dark_blue">TAMBAH PASIEN</h1>
        </button>
      </div>

      <ComponentPasien />
    </div>
  );
}
