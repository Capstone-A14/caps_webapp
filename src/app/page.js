import Image from "next/image";
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import DaftarPasien from "@/components/DaftarPasien";
import Link from "next/link";
import DetailPasien from "@/components/DetailPasien";

export default function Home() {
  return (
    <div className="min-h-full min-w-full grow flex items-start bg-black">
      <div className="min-w-[20%]">
        <SideMenu />
      </div>
      <div className="min-w-[80%]">
        <Header />
        {/* <DaftarPasien/> */}
        <DetailPasien/>
      </div>
    </div>
  );
}
