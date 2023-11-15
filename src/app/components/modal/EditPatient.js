<<<<<<< Updated upstream
"use client"
import React from "react";
import { useState } from "react";

export default function EditPatient({patient, closeModal = () => {} }) {
  const [name, updateName] = useState("");
  const [dob, updateDob] = useState("");

  const addTodo = () => {
    // 👇 Send a fetch request to Backend API.
    fetch("http://192.168.1.78:8000/api/v1/patient/"+patient.patient_id, {
=======
"use client";
import React, { useEffect, useState } from "react";

function getPatientAge(timestamp) {
  const date_ = new Date(timestamp);
  const date = date_.getFullYear();
  const today_ = new Date();
  const today = today_.getFullYear();
  const age = today - date;
  return age;
}

export default function EditPatient({ patient, closeModal = () => {} }) {
  const [name, updateName] = useState(patient.name);
  const [dob, updateDob] = useState(patient.dob);
  const [gender, updateGender] = useState(patient.gender);

  const editTodo = () => {
    // 👇 Send a fetch request to Backend API.
    fetch(`${process.env.PATIENT_API}/api/v1/patient/` + patient.patient_id, {
>>>>>>> Stashed changes
      method: "PUT",
      body: JSON.stringify({
        name,
        dob,
<<<<<<< Updated upstream
=======
        gender,
>>>>>>> Stashed changes
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
  };
<<<<<<< Updated upstream
=======

  // const [patientEdit, setPatientEdit] = useState({
  //   name: patient.name,
  //   dob: patient.dob,
  //   gender: patient.gender,
  // });

  // useEffect(()=>{
  //   console.log(patientEdit)
  // },[patientEdit])

  // const handleEdit = async (e) => {
  //   try {
  //     const res = await fetch(`${urlBE}/api/v1/patient/` + patient.patient_id, {
  //       method: "PUT",
  //       body: JSON.stringify(patientEdit),
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     });

  //     if (!res.ok) {
  //       const data = await res.json();
  //       throw new Error(data.error);
  //     }
  //     const data = await res.json();
  //     console.log(data);
  //     closeModal();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setPatientEdit((prevData) => ({
  //     ...prevData,
  //     [name]: value.toString(),
  //   }));
  // };
>>>>>>> Stashed changes

  return (
    <div className="m-5 p-5 bg-white rounded-lg">
      <h1>Edit Pasien</h1>

<<<<<<< Updated upstream
      <form className="mt-2 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
=======
      {/* <form className="mt-2 flex flex-col gap-4" onSubmit={handleEdit}> */}
      <form
        className="mt-2 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          editTodo();
>>>>>>> Stashed changes
        }}
      >
        <div>
          <label> Nama </label>
          <input
            type="text"
            className="input"
<<<<<<< Updated upstream
            placeholder="Masukkan nama pasien"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            required
=======
            name="name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
>>>>>>> Stashed changes
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
<<<<<<< Updated upstream
            <label> Usia </label>
            <input type="text" className="input" placeholder="2002-02-02" required
             value={dob}
             onChange={(e) => updateDob(e.target.value)}
=======
            <label> Tanggal Lahir </label>
            <input
              type="datetime-local"
              className="input"
              name="dob"
              value={patient.dob}
              onChange={(e) => updateDob(e.target.value)}
>>>>>>> Stashed changes
            />
          </div>

{/*          <div>
            <label> Jenis Kelamin </label>
            <select
              type="text"
              className="input"
              name="gender"
              value={patient.gender}
              onChange={(e) => updateGender(e.target.value)}
            >
              <option value="female">Perempuan</option>
              <option value="male">Laki-laki</option>
            </select>
          </div>*/}
        </div>

        <footer className="inline-flex min-w-full overflow-hidden md:flex md:items-baseline md:justify-end">
          <button
            type="submit"
            className="transition duration-200 w-min rounded-lg border border-black bg-white px-5 py-2 text-sm font-bold text-black hover:bg-black hover:text-white"
            // onClick={closeModal}
          >
            Submit
          </button>

          <button
            type="button"
            className="ml-2 min-w-0 px-5 py-2 text-sm font-bold text-red rounded-lg transition transition-200 bg-red/10 hover:bg-red hover:text-white border border-red"
            onClick={closeModal}
          >
            Batal
          </button>
        </footer>
      </form>
    </div>
  );
}
