import { Dashboard } from "@components/index.js";
import React from "react";
import localPatient from "@/app/patient.json";

export async function fetchPatients() {
  try {
    const res = await fetch(`/api/v1/patient`, {
      next: { revalidate: 10 },
      headers: {
        "content-Type": "application/json",
      },
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return localPatient;
  }
}

export default async function Home() {
  const patient = await fetchPatients();

  return (
    <div>
      <Dashboard patient={patient} />
    </div>
  );
}
