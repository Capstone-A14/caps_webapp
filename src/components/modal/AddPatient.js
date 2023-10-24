import React from "react";

export default function AddPatient() {
  return (
    <div className="m-5 p-5 bg-white rounded-lg">
      <h1>Tambah Pasien</h1>

      <form className="mt-2 flex flex-col gap-4">
        <div>
          <label> Nama </label>
          <input
            type="text"
            className="input"
            placeholder="Masukkan nama pasien"
            required
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label> Usia </label>
            <input type="integer" className="input" placeholder="34" required />
          </div>

          <div>
            <label> Jenis Kelamin </label>
            <select type="text" className="input" required>
              <option value="perempuan">Perempuan</option>
              <option value="lakilaki">Laki-laki</option>
            </select>
          </div>
        </div>

        <footer className="inline-flex min-w-full overflow-hidden md:flex md:items-baseline md:justify-end">
          <button
            type="submit"
            className="transition-200 w-min rounded-lg border border-gray-800 bg-white px-5 py-2 text-sm font-bold text-gray-800 drop-shadow-lg transition hover:bg-gray-800 hover:text-white hover:drop-shadow-lg"
          >
            Submit
          </button>

          <button
            type="cancel"
            className="ml-2 min-w-0 px-5 py-2 text-sm font-bold text-gray-800"
          >
            Batal
          </button>
        </footer>
      </form>

      {/* <div className="mt-6">
        <form>
          <div className="mb-6 grid gap-6 lg:grid-cols-2">
            <div>
              <label htmlFor="id" className="label">
                NIP/NIU
              </label>
              <input
                id="id"
                name="nomor_identitas"
                type="text"
                className="transition-200 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg"
              />
            </div>

            <div>
              <label htmlFor="civitas" className="label">
                Kelompok Civitas
              </label>
              <input
                id="civitas"
                name="civitas"
                type="text"
                className="transition-200 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
                placeholder="Civitas"
                readOnly
              />
            </div>

            <div>
              <label htmlFor="nokendaraan" className="label">
                Nomor Kendaraan
              </label>
              <input
                name="no_kendaraan"
                id="nokendaraan"
                type="text"
                className="transition-200 w-full rounded-lg border border-gray-300 !bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
                placeholder="AA 1234 BB"
                required
              />
            </div>

            <div>
              <label htmlFor="kendaraan" className="label">
                Jenis Kendaraan
              </label>
              <select
                name="jenis_kendaraan"
                id="kendaraan"
                className="transition-200 w-full rounded-lg border border-gray-300 !bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
                required
              >
                <option value="mobil">Mobil</option>
                <option value="motor">Motor</option>
              </select>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
}
