import React from "react";
import { CardAlat } from "@components/DaftarAlat";
import ComponentPasien from "./ComponentPasien";

function ListPatient() {
  return (
    <div className="mt-1 bg-orange p-2 rounded-lg">
      <p>Nama Pasien</p>
    </div>
  );
}

export default function Dashboard({patient, device}) {
  return (
    <div className="inside-container">
      <section className="rounded-lg bg-orange w-full p-6 my-2">
        <h1 className="text-[20px] text-white"> Halo! </h1>
      </section>

      <section>
        <h1 className="text-white text-[18px]">Overview</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-2">
          <div className="bg-dark_blue/25 border border-blue/25 rounded-lg p-4">
            <h1 className="text-white">Total Pasien</h1>
            <p className="text-white text-[40px] font-bold">34</p>
          </div>

          <div className="bg-orange/20 border border-orange/25 rounded-lg p-4">
            <h1 className="text-white">Alat Digunakan</h1>
            <p className="text-white text-[40px] font-bold">4</p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-white text-[18px] my-2">Pasien</h1>
        <section className="grid gap-2">
          <ComponentPasien patient={patient} />
          <ComponentPasien patient={patient} />
        </section>
      </section>

      <section>
        <h1 className="text-white text-[18px] my-2">Alat</h1>
        <section className="grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <CardAlat patient={patient} device={device} />
          <CardAlat patient={patient} device={device}/>
          <CardAlat patient={patient} device={device}/>
          <CardAlat patient={patient} device={device}/>
        </section>
      </section>
    </div>
  );
}
