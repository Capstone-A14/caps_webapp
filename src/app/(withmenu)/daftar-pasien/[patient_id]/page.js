import { DetailPasien } from "@components/index";
import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { fetchPatients } from "@/app/(withmenu)/page";

function PatientNotFound() {
  return (
    <div className="m-5 min-h-screen gap-2 grid place-content-center place-items-center">
      <FaceFrownIcon className="w-[40px] text-black" />
      <div>
        <h1 className="text-black">
          Wah, pasien tidak dapat ditemukan! Kembali ke{" "}
          <Link
            href="/daftar-pasien"
            className="underline hover:text-purple transition duration-200"
          >
            {" "}
            daftar pasien{" "}
          </Link>
        </h1>
      </div>
    </div>
  );
}

// async function fetchEcgData(){
//   try {
//     const res = await fetch(`${process.env.ECG_API}/api/v1/ecg`, {
//       next: { revalidate: 10 },
//     });
//     return res.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

export default async function pageDetailPasienId({ params }) {
  const patient = await fetchPatients();
  // const ecgData = await fetchEcgData();
  console.log(ecgData)

  const parsedPatientId = parseInt(params.patient_id);
  const patientbyId = patient.find((p) => p.patient_id === parsedPatientId);

  if (isNaN(parsedPatientId)) {
    return <PatientNotFound />;
  } else {
    if (patientbyId) {
      // return <DetailPasien patient={patientbyId} ecgDataData={ecgData} />;
      return <DetailPasien patient={patientbyId}/>;
    } else {
      return <PatientNotFound />;
    }
  }
}
