import React from "react";
import { Dashboard } from "@components/index.js";
import { fetchPatients } from "@/app/fetch/fetchPatients";

export default async function Home() {
  const patient = await fetchPatients();
  return (
    <div>
      {/* <Dashboard /> */}
      <Dashboard patient={patient}/>
    </div>
  );
}
