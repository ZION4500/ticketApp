import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="flex">
          <div className="w-80 h-screen bg-white p-6 hidden md:block border-r border-[#DDDDDD]">
            <h1 className="text-2xl font-semibold mb-12">
              Cin<span className="text-[#F5C518]">evo</span>
            </h1>
            <div>
              <ul className="flex flex-col gap-4 text-[#6B7280] font-medium text-sm items-center">
                <li className="text-white bg-[#142018] p-3 rounded-2xl">
                  Overview
                </li>
                <li>Movies</li>
                <li>Showtimes</li>
                <li>Bookings</li>
              </ul>
            </div>
          </div>
          <Outlet />
      </div>
    </>
  );
}
