"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import Modal from "@components/modal/layout.js";
import {
  ChevronDownIcon,
  PencilSquareIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { EditPatient, DeletePatient } from "@components/index.js";

function getHourFromTimestamp(timestamp) {
  let options = {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(timestamp);
  const hour = date.toLocaleString("id-ID", options);
  return hour;
}

export default function ComponentPasien({ patient }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // FOR SHOWCASE ONLY -- DELETE IF UNNECESSARY
  if (patient.activity === ""){
    patient.activity = "Tidak Ada Kegiatan"
  }

  return (
    <>
      <Modal isShow={showEditModal} closeModal={() => setShowEditModal(false)}>
<<<<<<< Updated upstream
        <EditPatient closeModal={() => setShowEditModal(false)}
          patient={patient}
=======
        <EditPatient
          patient={patient}
          closeModal={() => setShowEditModal(false)}
>>>>>>> Stashed changes
        />
      </Modal>

      <Modal
        isShow={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
      >
        <DeletePatient
          patient={patient}
          closeModal={() => setShowDeleteModal(false)}
        />
      </Modal>

      <div className="flex flex-row gap-1 items-center">
        <div
          className="bg-white w-full rounded-lg grid grid-cols-1 p-3 md:p-2 lg:grid-cols-7 items-center lg:gap-x-3 border-2"
        >
          <div className="grid grid-cols-2 md:col-span-3 gap-3 items-center">
            <div className="gap-2 flex min-w-min items-center">
              <UserIcon
                className={
                  "col-span-1 rounded-full min-w-[40px] max-w-[40px] p-2 text-white" +
                  (patient.af_detected === 1 ? " bg-red" : " bg-blue ")
                }
              />
              <div className="grid min-w-min">
                <label className="text-sm capitalize font-semibold">
                  {" "}
                  {patient.name}{" "}
                </label>
                <label> {patient.gender === "male" ? "Laki-laki" : "Perempuan"} </label>
              </div>
            </div>

            <div
              className={
                "rounded-lg py-1 px-3 font-semibold uppercase m-0.5 font-poppins text-white text-center text-[12px] min-w-min" +
                (patient.af_detected === 1 ? " bg-red " : " bg-blue ")
              }
            >
              {patient.af_detected === 1
                ? "AF Terdeteksi"
                : "AF Tidak Terdeteksi"}
            </div>
          </div>

          <div className="grid md:col-span-2 lg:col-span-3 grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3 items-start">
            {[
              [1, "Device", patient.device_id],
              [2, "Diperbarui", getHourFromTimestamp(patient.updated_at)],
              [3, "Kegiatan Pasien", patient.activity],
            ].map(([key, title, item]) => (
              <div className="items-start" key={key}>
                <label>
                  {title}
                  <br />
                  <p className="text-[12px] capitalize">{item}</p>
                </label>
              </div>
            ))}
          </div>

          <div className="grid md:col-span-2 lg:col-span-1 place-self-end lg:place-self-center w-[25%] lg:w-full">
            <Menu
              as="div"
              className="w-full bg-blue/20 rounded-lg relative inline-block"
            >
              <div>
                <Menu.Button className="text-blue text-[13px] text-semibold py-1 px-2 inline-flex w-full justify-between rounded-lg outline-none transition duration-200 hover:bg-white/20">
                  Aksi
                  <ChevronDownIcon className="h-5 w-5 text-blue" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-40 right-full top-0 mx-2 w-[200px] origin-top-right rounded-md bg-white backdrop-filter backdrop-blur-sm bg-opacity-50 outline-none drop-shadow-md">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <Link href={`/daftar-pasien/${patient.patient_id}`}>
                        <button className=" text-blue transition duration-200 hover:bg-blue/20  group flex w-full items-center rounded-md px-2 py-2 text-sm backdrop-filter backdrop-blur-sm bg-opacity-50">
                          <UserIcon className="h-4 w-4 m-2 text-blue" />
                          Detail Pasien
                        </button>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className=" text-blue transition duration-200 hover:bg-blue/20  group flex w-full items-center rounded-md px-2 py-2 text-sm backdrop-filter backdrop-blur-sm bg-opacity-50"
                        onClick={() => {
                          setShowEditModal(true);
                        }}
                      >
                        <PencilSquareIcon className="h-4 w-4 m-2 text-blue" />
                        Edit
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className=" text-red transition duration-200 hover:bg-red/20  group flex w-full items-center rounded-md px-2 py-2 text-sm backdrop-filter backdrop-blur-sm bg-opacity-50"
                        onClick={() => {
                          setShowDeleteModal(true);
                        }}
                      >
                        <TrashIcon className="h-4 w-4 m-2 text-red" />
                        Hapus
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
