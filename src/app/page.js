import {
  ComponentPasien,
  DaftarAlat,
  DaftarPasien,
  DetailPasien,
  Header,
  SideMenu,
  AddPatient,
  EditPatient,
  Dashboard,
  DeletePatient,
} from "@components/index";

export default function Home() {
  const patient = {
    name: "Wiliam Putra",
    gender: "laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    doctor: "Dr. Andre Wijaya",
    room: "ICU",
    room_no: "12A",
    age: "56",
  };

  const device = {
    id: "Dev-01",
  };

  const data = {
    patient: patient,
    device: device,
  };

  return (
    <div className="min-h-screen min-w-full grow flex items-start bg-black">
      <div className="xsm:w-[15%] md:w-[20%]">
        <SideMenu />
      </div>
      <div className="xsm:w-[85%] md:w-[80%]">
        <Header />
        <Dashboard {...data}/>
        <DaftarPasien {...data}/>
        <DetailPasien {...data}/>
        <AddPatient {...data} />
        <EditPatient {...data} />
        <DaftarAlat {...data} />
        <DeletePatient {...data} />
      </div>
    </div>
  );
}
