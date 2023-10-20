import React from "react";
import Image from "next/image";
import Link from "next/link";

import Magnifyglass from "@/assets/svg/magnifyglass.svg";
import Time from "@/assets/svg/time.svg";

export default function SideMenu() {
  const date = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const dateString = date.toLocaleDateString("id-ID", options);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  return (
    <div className="full-justified mt-0 gap-[2%] bg-white px-5 py-3 ">
      {/* SEARCH BOX */}
      <div className="w-[45%] px-2 bg-light_blue_25 rounded-lg  flex items-center">
        <Image src={Magnifyglass} />
        <input type="text" placeholder="Cari..." />
      </div>

      {/* DATE AND TIME */}
      <div className="relative flex items-center gap-2.5">
        <Image src={Time} />
        <p className="text-blue"> {timeString} </p>
        <p className="text-blue"> {dateString} </p>
      </div>
    </div>
  );
}
