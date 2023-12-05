"use client"
import React, { useState } from "react";
import { patient_api } from "@/app/fetch/fetchPatients";

export default function AddPatient({ closeModal = () => {} }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();

  const addTodo = () => {
    fetch(patient_api, {
      method: "POST",
      body: JSON.stringify({
        name,
        dob,
        gender,
      }),
      headers: {
        "content-type" : "application/json",
      },
    }).catch((e) => console.log(e));
  }

  return (
    <div className="m-5 p-5 bg-white rounded-lg">
      <h1>Tambah Pasien</h1>

      <form className="mt-2 flex flex-col gap-4" onSubmit={(e)=>{
        addTodo();
        closeModal();
      }}>
        <div>
          <label> Nama </label>
          <input
            type="text"
            className="input"
            name="name"
            value={name}
            placeholder="Masukkan nama pasien"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
          <label> Tanggal Lahir </label>
            <input
              type="datetime-local"
              className="input"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div>
            <label> Jenis Kelamin </label>
            <select
              type="text"
              className="input"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="female">Perempuan</option>
              <option value="male">Laki-laki</option>
            </select>
          </div>
        </div>

        <footer className="inline-flex min-w-full overflow-hidden md:flex md:items-baseline md:justify-end">
          <button
            type="submit"
            className="transition transition-200 w-min rounded-lg border border-gray-800 bg-white px-5 py-2 text-sm font-bold text-gray-800 drop-shadow-lg hover:bg-gray-800 hover:text-white hover:drop-shadow-lg"
          >
            Submit
          </button>

          <button
            type="cancel"
            className="ml-2 min-w-0 px-5 py-2 text-sm font-bold text-gray-800 rounded-lg transition transition-200 hover:bg-red hover:text-white hover:drop-shadow-lg"
            onClick={closeModal}
          >
            Batal
          </button>
        </footer>
      </form>
    </div>
  );
}
