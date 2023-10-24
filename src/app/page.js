import Image from "next/image";
import Link from "next/link";
// import { SideMenu, Header, DaftarPasien, DetailPasien, AddPatient } from "@/components";
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import DaftarPasien from "@/components/DaftarPasien";
import DetailPasien from "@/components/DetailPasien";
import AddPatient from "@/components/modal/AddPatient";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full grow flex items-start bg-black">
      <div className="xsm:w-[15%] md:w-[20%]">
      <SideMenu />
      </div>
      <div className="xsm:w-[85%] md:w-[80%]">
        <Header />
        {/* <DaftarPasien/> */}
        {/* <DetailPasien/> */}
        <AddPatient />
      </div>
    </div>
  );
}
