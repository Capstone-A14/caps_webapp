"use client";
import { Dashboard, DetailPasien } from "@components/index.js";

const patient = {
  id: 1,
  name: "Wiliam Putra",
  gender: "laki-laki",
  mrno: "123827",
  date_registered: "09/01/2023",
  status: "Tanpa Pengawasan",
  doctor: "Dr. Andre Wijaya",
  room: "ICU",
  room_no: "12A",
  age: 56,
};

const device = {
  id: "Dev-01",
};

const data = {
  patient: patient,
  device: device,
};

export default function Home() {
  // const [data, setData] = useState();
  // const [patient, setPatient] = useState(patient);
  // const [device, setDevice] = useState(device);

  return (
    <>
      <Dashboard {...data} />
      {/* <DetailPasien {...data} /> */}
    </>
  );
}
