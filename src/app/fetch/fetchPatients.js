// the "localPatient" are used for UI test
// Change the patient_api url accordingly
import localPatient from "@/app/patient.json" assert { type: "json" };
export const patient_api = "http://192.168.0.101:8000/api/v1/patient";

export async function fetchPatients() {
  try {
    // Using ENV, dont forget to set up the ENV 👇
    // const res = await fetch(process.env.PATIENT_API + `/api/v1/patient`, {
    const res = await fetch(patient_api, {
      next: { revalidate: 10 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    // Handle network error and using local data insted
    console.error("Error fetching data from API, using local instead");
    console.error("Error message:", error);
    return localPatient;
  }
}
