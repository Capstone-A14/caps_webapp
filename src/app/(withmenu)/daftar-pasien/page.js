import React from "react";
import { DaftarPasien } from "@components/index.js";
import { fetchPatients } from "@/app/fetch/fetchPatients";

export default async function pageDaftarPasien() {
  const patient = await fetchPatients();
  return (
    <>
      {/* <DaftarPasien /> */}
      <DaftarPasien patient={patient}/>
    </>
  );
}
