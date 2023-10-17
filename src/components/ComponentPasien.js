import React from "react";

export default function ComponentPasien() {
  const pasien = {
    name: "Wiliam Putra",
    gender: "laki-laki",
    mrno: "123827",
    date_registered: "09/01/2023",
    status: "Tanpa Pengawasan",
    dokter: "Dr. Andre Wijaya",
    ruang: "ICU",
    nomor: "12A",
    usia: "56",
  };

  return (
    <div>
      <div className="mt-2 bg-white p-3 w-[100%] rounded-lg inline-flex flex-row flex items-center">
        <div className="w-[20%] gap-2 flex-row inline-flex items-start">
          <div className="bg-blue p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                d="M26.1139 13.0645C26.7038 13.0645 27.288 13.1807 27.8331 13.4065C28.3781 13.6323 28.8733 13.9632 29.2905 14.3803C29.7077 14.7975 30.0386 15.2927 30.2643 15.8378C30.4901 16.3828 30.6063 16.967 30.6063 17.5569C30.6063 18.1469 30.4901 18.7311 30.2643 19.2761C30.0386 19.8212 29.7077 20.3164 29.2905 20.7336C28.8733 21.1507 28.3781 21.4816 27.8331 21.7074C27.288 21.9331 26.7038 22.0493 26.1139 22.0493C24.9224 22.0493 23.7798 21.576 22.9373 20.7336C22.0948 19.8911 21.6215 18.7484 21.6215 17.5569C21.6215 16.3655 22.0948 15.2228 22.9373 14.3803C23.7798 13.5379 24.9224 13.0645 26.1139 13.0645ZM26.1139 32.3177C32.4674 32.3177 39.1632 35.441 39.1632 36.8101V39.1632H13.0645V36.8101C13.0645 35.441 19.7604 32.3177 26.1139 32.3177ZM26.1139 9C21.3862 9 17.5569 12.8292 17.5569 17.5569C17.5569 22.2847 21.3862 26.1139 26.1139 26.1139C30.8416 26.1139 34.6708 22.2847 34.6708 17.5569C34.6708 12.8292 30.8416 9 26.1139 9ZM26.1139 28.2531C20.4021 28.2531 9 31.1197 9 36.8101V43.2278H43.2278V36.8101C43.2278 31.1197 31.8257 28.2531 26.1139 28.2531Z"
                fill="#FBFBFB"
              />
            </svg>
          </div>
          <div className="flex-col inline-flex items-start">
            <label className="lbl_nama"> {pasien.name} </label>
            <div className="flex-row inline-flex items-baseline gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              >
                <circle cx="2.74037" cy="2.14653" r="2.00404" fill="#1D3557" />
              </svg>
              <label> {pasien.gender} </label>
            </div>
          </div>
        </div>

        <div className="w-[8%] flex-col inline-flex items-start">
          <label> MR.no </label>
          <label className="lbl_detail"> {pasien.mrno} </label>
        </div>

        <div className="w-[15%] flex-col inline-flex items-start">
          <label> Tanggal Masuk </label>
          <label className="lbl_detail"> {pasien.date_registered} </label>
        </div>

        <div className="w-[18%] flex-col inline-flex items-start">
          <label> Status </label>
          <div className="bg-blue inline-flex justify-center items-center rounded-lg py-1 px-2">
            <label className="text-white font-semibold">{pasien.status}</label>
          </div>
        </div>

        <div className="w-[18%] flex-col inline-flex items-start">
          <label> Dokter </label>
          <label className="lbl_detail"> {pasien.dokter} </label>
        </div>

        <div className="w-[14%] flex-col inline-flex items-start">
          <label> Ruang/Nomor </label>
          <label className="lbl_detail">
            {" "}
            {pasien.ruang}/{pasien.nomor}{" "}
          </label>
        </div>

        <div className="w-[5%] flex-col inline-flex items-start">
          <label> Usia </label>
          <label className="lbl_detail"> {pasien.usia} </label>
        </div>

        <button class="w-[15%] relative bg-blue overflow-hidden rounded-full py-1 px-4">
          <h2 className="text-white">Detail Pasien</h2>
        </button>
      </div>
    </div>
  );
}
