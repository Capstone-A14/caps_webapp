import React from "react";
import Link from "next/link";

export default function SideMenu() {
  const rumahsakit = {
    name: "RUMAH SAKIT HARAPAN",
    ruang: "ICU",
  };

  return (
    <div className="p-5 min-h-screen  bg-white rounded-br-lg">
      <div className="pb-5">
        <h1 className="text-[12px] flex-wrap break-words">
          {" "}
          {rumahsakit.name}{" "}
        </h1>
      </div>

      <h2> Ruang </h2>
      <h1 className="text-3xl flex-wrap break-words"> {rumahsakit.ruang} </h1>

      <div className="mt-2">
        <button class="btn_sidemenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M17 22.5L26 15.5L35 22.5V33.5C35 34.0304 34.7893 34.5391 34.4142 34.9142C34.0391 35.2893 33.5304 35.5 33 35.5H19C18.4696 35.5 17.9609 35.2893 17.5858 34.9142C17.2107 34.5391 17 34.0304 17 33.5V22.5Z"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 35.5V25.5H29V35.5"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="font-normal"> Dashboard </h1>
        </button>

        <button class="btn_sidemenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M31 34.5V32.5C31 31.4391 30.5786 30.4217 29.8284 29.6716C29.0783 28.9214 28.0609 28.5 27 28.5H19C17.9391 28.5 16.9217 28.9214 16.1716 29.6716C15.4214 30.4217 15 31.4391 15 32.5V34.5"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23 24.5C25.2091 24.5 27 22.7091 27 20.5C27 18.2909 25.2091 16.5 23 16.5C20.7909 16.5 19 18.2909 19 20.5C19 22.7091 20.7909 24.5 23 24.5Z"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37 34.4999V32.4999C36.9993 31.6136 36.7044 30.7527 36.1614 30.0522C35.6184 29.3517 34.8581 28.8515 34 28.6299"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30 16.6299C30.8604 16.8502 31.623 17.3506 32.1676 18.0522C32.7122 18.7538 33.0078 19.6167 33.0078 20.5049C33.0078 21.3931 32.7122 22.256 32.1676 22.9576C31.623 23.6592 30.8604 24.1596 30 24.3799"
              stroke="#50ABE4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="font-normal"> Daftar Pasien </h1>
        </button>

        <button class="btn_sidemenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M24.247 35.73H17.8787C17.2645 35.73 16.6755 35.486 16.2412 35.0517C15.807 34.6175 15.563 34.0284 15.563 33.4143V19.5201C15.563 18.9059 15.807 18.3169 16.2412 17.8826C16.6755 17.4483 17.2645 17.2043 17.8787 17.2043H34.0888C34.703 17.2043 35.292 17.4483 35.7263 17.8826C36.1606 18.3169 36.4045 18.9059 36.4045 19.5201V25.3093M22.5102 32.2564H23.668"
              stroke="#50ABE4"
              stroke-width="2.31572"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M32.9304 38.0457L36.8093 34.2433C37.0471 34.0125 37.2363 33.7364 37.3657 33.4312C37.4951 33.1261 37.562 32.7981 37.5626 32.4666C37.5631 32.1352 37.4973 31.807 37.3689 31.5014C37.2405 31.1959 37.0522 30.9191 36.8151 30.6875C36.3312 30.2144 35.6817 29.9488 35.005 29.9476C34.3282 29.9463 33.6777 30.2093 33.1921 30.6806L32.9327 30.9353L32.6745 30.6806C32.1908 30.2078 31.5415 29.9425 30.865 29.9412C30.1886 29.9399 29.5383 30.2027 29.0527 30.6736C28.8148 30.9044 28.6255 31.1805 28.496 31.4856C28.3665 31.7907 28.2995 32.1186 28.2988 32.4501C28.2982 32.7815 28.3639 33.1097 28.4922 33.4153C28.6205 33.7209 28.8088 33.9977 29.0458 34.2294L32.9304 38.0457Z"
              stroke="#50ABE4"
              stroke-width="2.31572"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="font-normal"> Alat </h1>
        </button>
      </div>
    </div>
  );
}
