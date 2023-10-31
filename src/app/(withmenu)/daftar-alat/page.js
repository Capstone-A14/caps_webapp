import React from "react";
import { DaftarAlat } from "@/components/index";

const patient = {
  name: "Wiliam Putra",
  gender: "laki-laki",
  mrno: "123827",
  date_registered: "09/01/2023",
  status: "Tanpa Pengawasan",
  doctor: "Dr. Andre Wijaya",
  room: "ICU",
  room_no: "12A",
  age: "56",
};

const device = {
  id: "Dev-01",
};

const data = {
  patient: patient,
  device: device,
};

export default function page() {
  return (
    <>
      <DaftarAlat {...data} />
    </>
  );
}
