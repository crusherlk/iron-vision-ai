import { HiOutlineMenu } from "react-icons/hi";
import DropDownUser from "../components/header/dropDownUser";

// eslint-disable-next-line react/prop-types
function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-t02-blue2 text-black">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 lg:justify-end 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            className="z-[999] block rounded-sm border bg-white p-1.5 shadow-sm lg:hidden"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <HiOutlineMenu size={20} />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-2">
            <DropDownUser />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
