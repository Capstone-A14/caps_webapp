import React from "react";
import { DaftarAlat } from "@components/index";
import { fetchPatients } from "@/app/fetch/fetchPatients";

export default async function pageDaftarAlat() {
  const patient = await fetchPatients();
  return (
    <>
      {/* <DaftarAlat /> */}
      <DaftarAlat patient={patient}/>
    </>
  );
}
