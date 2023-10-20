import React from "react";

export default function DetailPasien() {
  const pasien = {
    name: "Wiliam Putra",
    gender: "laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    doctor: "Dr. Andre Wijaya",
    room: "ICU",
    room_no: "12A",
    age: "56",
    blood_type: "A",
  };

  return (
    <div className="inside-container">
      {/* Breadcrumbs */}
      <div>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex space-x-2">
            <li>
              <a href="/DetailPasien" className="breadcrumb-text">
                Daftar Pasien
              </a>
            </li>
            <li className="breadcrumb-text"> - </li>
            <li className="breadcrumb-text">{pasien.name}</li>
          </ol>
        </nav>
      </div>

      {/* detail pasien */}
      <div className="mt-5 bg-white rounded-lg flex items-start">
        {/* Sisi Kiri */}
        <div className="w-[25%] px-5 py-7 centered-items gap-5">
          <div className="centered-items gap-3">
            <div className="rounded-full h-[70px] w-[70px] bg-blue centered-items">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 87 88"
                fill="none"
              >
                <path
                  d="M43.4977 21.9903C44.4907 21.9903 45.4739 22.1859 46.3912 22.5659C47.3086 22.9459 48.1421 23.5028 48.8442 24.2049C49.5464 24.907 50.1033 25.7406 50.4833 26.6579C50.8633 27.5753 51.0589 28.5585 51.0589 29.5515C51.0589 30.5444 50.8633 31.5276 50.4833 32.445C50.1033 33.3624 49.5464 34.1959 48.8442 34.898C48.1421 35.6001 47.3086 36.1571 46.3912 36.5371C45.4739 36.917 44.4907 37.1126 43.4977 37.1126C41.4924 37.1126 39.5692 36.316 38.1512 34.898C36.7332 33.48 35.9366 31.5568 35.9366 29.5515C35.9366 27.5461 36.7332 25.6229 38.1512 24.2049C39.5692 22.7869 41.4924 21.9903 43.4977 21.9903ZM43.4977 54.3952C54.1913 54.3952 65.461 59.652 65.461 61.9564V65.917H21.5344V61.9564C21.5344 59.652 32.8041 54.3952 43.4977 54.3952ZM43.4977 15.1493C35.5405 15.1493 29.0955 21.5943 29.0955 29.5515C29.0955 37.5087 35.5405 43.9536 43.4977 43.9536C51.4549 43.9536 57.8999 37.5087 57.8999 29.5515C57.8999 21.5943 51.4549 15.1493 43.4977 15.1493ZM43.4977 47.5542C33.8843 47.5542 14.6934 52.3789 14.6934 61.9564V72.758H72.3021V61.9564C72.3021 52.3789 53.1112 47.5542 43.4977 47.5542Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="stats_tp">
              <h2 className="text-[12px] text-white font-semibold">
                {" "}
                {pasien.status}{" "}
              </h2>
            </div>
          </div>

          <div className="centered-items">
            <h1 className="text-black text-[18px]"> {pasien.name} </h1>
            <h2 className="text-black"> {pasien.doctor} </h2>
          </div>

          <div className="gap-x-2 flex items-baseline">
            <div className="min-w-[110px] px-2 right-items">
              <label className="text-[12px]"> ruang/nomor </label>
              <h1 className="text-black text-[16px]">
                {pasien.room}/{pasien.room_no}
              </h1>
            </div>

            <div className="min-w-[110px] px-2 left-items">
              <label className="text-[12px]"> Nomor MR </label>
              <h1 className="text-black text-[16px]">{pasien.mrno}</h1>
            </div>
          </div>
        </div>

        {/* Sisi Kanan */}
        <div className="w-[75%] py-6 px-5 left-items gap-5">
          <div className="flex items-baseline gap-10">
            <div className="left-items">
              <label> Tanggal Masuk</label>
              <label className="lbl_detail"> {pasien.date_registered}</label>
            </div>

            <div className="left-items">
              <label> Jenis Kelamin</label>
              <label className="lbl_detail"> {pasien.gender}</label>
            </div>

            <div className="left-items">
              <label> Golongan Darah </label>
              <label className="lbl_detail"> {pasien.blood_type}</label>
            </div>

            <div className="left-items">
              <label> Usia </label>
              <label className="lbl_detail"> {pasien.age}</label>
            </div>
          </div>

          <div className="left-items">
            <label> Diagnosis Dokter </label>
            <p>Pasien memiliki tekanan darah sistolik rata-rata di atas 140 mmHg dan tekanan darah diastolik rata-rata di atas 90 mmHg selama tiga kali kunjungan berbeda. Diagnosis hipertensi dibuat setelah melakukan pemantauan tekanan darah yang berulang.</p>
          </div>
        </div>
      </div>

      {/* EKG */}
      <div className="mt-5 p-5 w-[45%] bg-white rounded-lg flex items-start">
        <h1>Rekam EKG</h1>
        {/* GRAFANA GOES HERE */}
      </div>
    </div>
  );
}
