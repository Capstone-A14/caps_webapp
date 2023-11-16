import { SideMenu, Header } from "@components/index.js";
import { fetchPatients } from "./page";

export default async function withMenu({ children }) {
  const patient = await fetchPatients();

  console.log(patient);
  return (
    <div className="css_map bg-white min-h-screen">
      <div className="sideMenu z-30 sticky bottom-0 mt-14">
        <SideMenu />
      </div>

      <div className="headerHere z-20 sticky top-0 right-0">
        <Header patient={patient} />
        {/* <Header/> */}
      </div>

      <div className="contentsHere bg-[#E3E3E3] black z-10 rounded-none md:rounded-tl-3xl">
        {children}
      </div>
    </div>
  );
}
