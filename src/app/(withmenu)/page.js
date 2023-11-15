import { Dashboard } from "@components/index.js";
import React from "react";

export async function fetchPatients() {
  try {
    const res = await fetch(`${process.env.PATIENT_API}/api/v1/patient`, {
      next: { revalidate: 10 },
      headers: {
        "content-Type": "application/json",
      },
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
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
