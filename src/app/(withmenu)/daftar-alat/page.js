import React from "react";
import { fetchPatients } from "@/app/(withmenu)/page";
import { DaftarAlat } from "@components/index";

export default async function pageDaftarAlat() {
  const patient = await fetchPatients();
  return (
    <>
      <DaftarAlat patient={patient} />
    </>
  );
}
