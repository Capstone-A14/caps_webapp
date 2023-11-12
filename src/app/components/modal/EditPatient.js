"use client"
import React from "react";
import { useState } from "react";

export default function EditPatient({patient, closeModal = () => {} }) {
  const [name, updateName] = useState("");
  const [dob, updateDob] = useState("");

  const addTodo = () => {
    // 👇 Send a fetch request to Backend API.
    fetch("http://192.168.1.78:8000/api/v1/patient/"+patient.patient_id, {
      method: "PUT",
      body: JSON.stringify({
        name,
        dob,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
  };

  return (
    <div className="m-5 p-5 bg-white rounded-lg">
      <h1>Edit Pasien</h1>

      <form className="mt-2 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <div>
          <label> Nama </label>
          <input
            type="text"
            className="input"
            placeholder="Masukkan nama pasien"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            required
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label> Usia </label>
            <input type="text" className="input" placeholder="2002-02-02" required
             value={dob}
             onChange={(e) => updateDob(e.target.value)}
            />
          </div>

{/*          <div>
            <label> Jenis Kelamin </label>
            <select type="text" className="input" required>
              <option value="perempuan">Perempuan</option>
              <option value="lakilaki">Laki-laki</option>
            </select>
          </div>*/}
        </div>

        <footer className="inline-flex min-w-full overflow-hidden md:flex md:items-baseline md:justify-end">
          <button
            type="submit"
            className="transition-200 w-min rounded-lg border border-gray-800 bg-white px-5 py-2 text-sm font-bold text-gray-800 drop-shadow-lg transition hover:bg-gray-800 hover:text-white hover:drop-shadow-lg"
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
