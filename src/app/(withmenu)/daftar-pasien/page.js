import React from "react";
import { DaftarPasien } from "@components/index.js";

const patient = [
  {
    id: 1,
    name: "Wiliam Putra",
    gender: "Laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    doctor: "Dr. Andre Wijaya",
    room: "ICU",
    room_no: "12A",
    age: 56,
  },
  {
    id: 2,
    name: "Ashley D.",
    gender: "Perempuan",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Dalam Pengawasan",
    doctor: "Dr. Andre Wijaya",
    room: "ICU",
    room_no: "12A",
    age: 56,
  },
  {
    id: 3,
    name: "Kiky D.",
    gender: "Perempuan",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Ditemukan Kejanggalan",
    doctor: "Dr. Andre Wijaya",
    room: "ICU",
    room_no: "12A",
    age: 56,
  },
];

const device = [
  {
    id: "Dev-01",
    name: "Testing",
  },
  {
    id: "Dev-02",
    name: "Testing Dev2",
  },
];

const data = {
  patient: patient,
  device: device,
};

export default function page() {
  return (
    <>
      <DaftarPasien {...data} />
    </>
  );
}
