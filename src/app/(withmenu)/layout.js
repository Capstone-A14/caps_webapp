import { SideMenu, Header } from "@components/index.js";

export const metadata = {
  title: "Cardimetry.",
};

export default function withMenu({ children }) {
  return (
    <div className="css_map bg-white min-h-screen">
      <div className="sideMenu z-30 sticky bottom-0">
        <SideMenu />
      </div>

      <div className="headerHere z-20 sticky top-0 right-0">
        <Header />
      </div>

      <div className="contentsHere bg-black z-10 rounded-none md:rounded-tl-3xl">
        {children}
      </div>
    </div>
  );
}
