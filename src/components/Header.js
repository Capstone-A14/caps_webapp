import React from "react";
import Link from "next/link";

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
    // <div className="max-h-[2%] gap-[5%] bg-white relative flex items-center p-2 py-3 ">
    //   <div className="min-w-[25%]" />
    //   <div className="min-w-[35%] px-2 bg-light_blue_25 rounded-lg relative flex items-center">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="30"
    //       height="30"
    //       viewBox="0 0 37 37"
    //       fill="none"
    //     >
    //       <path
    //         d="M21.811 19.8484H21.152L20.9185 19.6232C21.4398 19.0176 21.8207 18.3043 22.0341 17.5343C22.2476 16.7643 22.2881 15.9566 22.153 15.169C21.7609 12.8502 19.8258 10.9985 17.4902 10.7149C16.6692 10.611 15.8352 10.6963 15.0521 10.9643C14.2691 11.2324 13.5577 11.6759 12.9725 12.2612C12.3873 12.8464 11.9437 13.5578 11.6757 14.3408C11.4077 15.1238 11.3223 15.9578 11.4262 16.7789C11.7098 19.1144 13.5615 21.0496 15.8804 21.4416C16.6679 21.5768 17.4756 21.5362 18.2456 21.3228C19.0157 21.1094 19.729 20.7284 20.3346 20.2071L20.5598 20.4407V21.0996L24.1048 24.6446C24.4468 24.9866 25.0056 24.9866 25.3476 24.6446C25.6896 24.3026 25.6896 23.7438 25.3476 23.4018L21.811 19.8484ZM16.8063 19.8484C14.7293 19.8484 13.0527 18.1719 13.0527 16.0949C13.0527 14.018 14.7293 12.3414 16.8063 12.3414C18.8832 12.3414 20.5598 14.018 20.5598 16.0949C20.5598 18.1719 18.8832 19.8484 16.8063 19.8484Z"
    //         fill="#50ABE4"
    //       />
    //     </svg>
    //     <input type="text" placeholder="Cari..." />
    //   </div>

    //   <div className="relative flex items-center min-w-[25%]">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="30"
    //       height="30"
    //       viewBox="0 0 37 37"
    //       fill="none"
    //     >
    //       <path
    //         d="M18.6854 25.5136C22.6148 25.5136 25.8 22.3284 25.8 18.399C25.8 14.4696 22.6148 11.2844 18.6854 11.2844C14.756 11.2844 11.5708 14.4696 11.5708 18.399C11.5708 22.3284 14.756 25.5136 18.6854 25.5136Z"
    //         stroke="#50ABE4"
    //         stroke-width="1.42292"
    //         stroke-linejoin="round"
    //       />
    //       <path
    //         d="M18.6885 14.1302V18.4025L21.7047 21.4191"
    //         stroke="#50ABE4"
    //         stroke-width="1.42292"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //       />
    //     </svg>
    //     <div className="gap-2.5 relative flex items-center">
    //       <h2>{timeString}</h2>
    //       <h2>{dateString}</h2>
    //     </div>
    //   </div>
    // </div>

    <div className="gap-[2%] bg-white relative flex items-center justify-between px-5 py-3 ">
      
      {/* SEARCH BOX */}
      <div className="w-[45%] px-2 bg-light_blue_25 rounded-lg relative flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M21.811 19.8484H21.152L20.9185 19.6232C21.4398 19.0176 21.8207 18.3043 22.0341 17.5343C22.2476 16.7643 22.2881 15.9566 22.153 15.169C21.7609 12.8502 19.8258 10.9985 17.4902 10.7149C16.6692 10.611 15.8352 10.6963 15.0521 10.9643C14.2691 11.2324 13.5577 11.6759 12.9725 12.2612C12.3873 12.8464 11.9437 13.5578 11.6757 14.3408C11.4077 15.1238 11.3223 15.9578 11.4262 16.7789C11.7098 19.1144 13.5615 21.0496 15.8804 21.4416C16.6679 21.5768 17.4756 21.5362 18.2456 21.3228C19.0157 21.1094 19.729 20.7284 20.3346 20.2071L20.5598 20.4407V21.0996L24.1048 24.6446C24.4468 24.9866 25.0056 24.9866 25.3476 24.6446C25.6896 24.3026 25.6896 23.7438 25.3476 23.4018L21.811 19.8484ZM16.8063 19.8484C14.7293 19.8484 13.0527 18.1719 13.0527 16.0949C13.0527 14.018 14.7293 12.3414 16.8063 12.3414C18.8832 12.3414 20.5598 14.018 20.5598 16.0949C20.5598 18.1719 18.8832 19.8484 16.8063 19.8484Z"
            fill="#50ABE4"
          />
        </svg>
        <input type="text" placeholder="Cari..." />
      </div>

      {/* DATE AND TIME */}
      <div className="relative flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M18.6854 25.5136C22.6148 25.5136 25.8 22.3284 25.8 18.399C25.8 14.4696 22.6148 11.2844 18.6854 11.2844C14.756 11.2844 11.5708 14.4696 11.5708 18.399C11.5708 22.3284 14.756 25.5136 18.6854 25.5136Z"
            stroke="#50ABE4"
            stroke-width="1.42292"
            stroke-linejoin="round"
          />
          <path
            d="M18.6885 14.1302V18.4025L21.7047 21.4191"
            stroke="#50ABE4"
            stroke-width="1.42292"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="gap-2.5 relative flex items-center">
          <h2>{timeString}</h2>
          <h2>{dateString}</h2>
        </div>
      </div>
    </div>
  );
}
