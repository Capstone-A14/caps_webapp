import React from "react";
import { DaftarPasien } from "@components/index.js";
import { fetchPatients } from "@/app/(withmenu)/page";

export default async function pageDaftarPasien() {
  const patient = await fetchPatients();
  return (
    <>
      <DaftarPasien patient={patient} />
    </>
  );
}
