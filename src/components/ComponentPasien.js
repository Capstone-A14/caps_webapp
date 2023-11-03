"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Modal from "@components/modal/layout.js";
import {
  ChevronDownIcon,
  PencilSquareIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { EditPatient, DeletePatient} from "@components/index.js";

export default function ComponentPasien({ patient }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <Modal isShow={showEditModal} closeModal={() => setShowEditModal(false)}>
        <EditPatient closeModal={() => setShowEditModal(false)} />
      </Modal>

      <Modal isShow={showDeleteModal} closeModal={() => setShowDeleteModal(false)}>
        <DeletePatient closeModal={() => setShowDeleteModal(false)} />
      </Modal>

      <div className="bg-white w-full rounded-lg grid grid-cols-1 grid-rows-1 p-3 lg:p-2 lg:grid-cols-6 items-center lg:gap-x-3">
        <div className="gap-3 grid grid-cols-2 md:grid-cols-3 lg:flex-row lg:inline-flex lg:items-center lg:col-span-2">
          <div className="flex-row flex-auto inline-flex items-start gap-2">
            <UserIcon className="bg-blue rounded-full w-[40px] p-2 text-white" />
            <div className="grid">
              <label className="lbl_nama"> {patient.name} </label>
              <label> {patient.gender} </label>
            </div>
          </div>

          <div>
            <div className="stats_tp bg-blue text-white text-center text-[12px]">
              {patient.status}
            </div>
          </div>
        </div>

        <div className="grid col-span-2 grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3 lg:p-0 lg:col-span-3">
          <label>
            MR.no <br />
            <span className="lbl_detail"> {patient.mrno} </span>
          </label>

          <label>
            Tanggal Masuk <br />
            <span className="lbl_detail"> {patient.date_registered} </span>
          </label>

          <label>
            Dokter <br />
            <span className="lbl_detail"> {patient.doctor} </span>
          </label>

          <label>
            Ruang/Nomor <br />
            <span className="lbl_detail">
              {patient.room}/{patient.room_no}
            </span>
          </label>
        </div>

        <div className="grid place-self-end lg:place-self-center w-[25%] lg:w-full">
          <Menu
            as="div"
            className="w-full bg-blue/10 rounded-lg relative inline-block"
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
              <Menu.Items className="z-40 absolute right-0 mt-2 w-[200px] origin-top-right rounded-md bg-white outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    <button className="bg-white text-blue hover:bg-blue/5  group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      <UserIcon className="h-4 w-4 m-2 text-blue" />
                      Detail Pasien
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      className="bg-white text-blue hover:bg-blue/5  group flex w-full items-center rounded-md px-2 py-2 text-sm"
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
                      className="bg-white text-red hover:bg-red/5  group flex w-full items-center rounded-md px-2 py-2 text-sm"
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
    </>
  );
}
