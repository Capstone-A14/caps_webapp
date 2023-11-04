import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function DeletePatient({ patient, closeModal = () => {} }) {
  return (
    <div className="bg-white rounded-lg m-5 p-5 gap-1 flex flex-col max-w-[500px] place-self-center">
      <div className="flex items-center gap-2 bg-red/10 border-red border-1 rounded-lg px-4 py-2">
        <ExclamationTriangleIcon className="w-[20px] text-red"/>
        <h1 className="text-red">HATI-HATI!</h1>
      </div>

      <p className="my-5">
        Anda akan menghapus pasien dengan nama{" "}
        <span className="bg-red/10 px-2 py-1 rounded-lg font-bold text-red">"{patient.name}".</span> Yakin ingin menghapus pasien ini?
      </p>

      <div className="flex flex-inline gap-2 justify-end">
        <button className="transition duration-200 border border-red bg-red/10 text-red hover:bg-red rounded-lg px-4 py-2 text-[14px] font-['Poppins'] font-bold hover:text-white"
        onClick={closeModal}>
          Ya, Hapus
        </button>
        <button className="transition duration-200 hover:bg-black/10 px-4 py-2 text-[14px] rounded-lg font-['Poppins']  text-black font-bold"
        onClick={closeModal}>
          Tidak, Jangan Hapus
        </button>
      </div>
    </div>
  );
}
