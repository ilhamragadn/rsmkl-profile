import {
  faChevronDown,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import RSMKLFull from "../assets/logo-rsmkl-full.png";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const getMenuItems = () => {
    switch (pathName) {
      case "/":
        return [
          { name: "Tentang", path: "/about" },
          {
            name: "Layanan",
            submenu: [
              { name: "Kamar Inap", path: "/inpatient-room" },
              { name: "Poliklinik", path: "/polyclinic" },
            ],
          },
          { name: "Dokter", path: "/doctor" },
          { name: "Informasi", path: "#information" },
          { name: "Hubungi Kami", path: "#contactUs" },
        ];
      case "/about":
        return [
          { name: "Beranda", path: "/" },
          {
            name: "Layanan",
            submenu: [
              { name: "Kamar Inap", path: "/inpatient-room" },
              { name: "Poliklinik", path: "/polyclinic" },
            ],
          },
          { name: "Dokter", path: "/doctor" },
        ];
      case "/doctor":
        return [
          { name: "Beranda", path: "/" },
          { name: "Tentang", path: "/about" },
          {
            name: "Layanan",
            submenu: [
              { name: "Kamar Inap", path: "/inpatient-room" },
              { name: "Poliklinik", path: "/polyclinic" },
            ],
          },
        ];
      case "/polyclinic":
        return [
          { name: "Beranda", path: "/" },
          { name: "Tentang", path: "/about" },
          {
            name: "Layanan",
            submenu: [{ name: "Kamar Inap", path: "/inpatient-room" }],
          },
          { name: "Dokter", path: "/doctor" },
        ];
      case "/inpatient-room":
        return [
          { name: "Beranda", path: "/" },
          { name: "Tentang", path: "/about" },
          {
            name: "Layanan",
            submenu: [{ name: "Poliklinik", path: "/polyclinic" }],
          },
          { name: "Dokter", path: "/doctor" },
        ];
      case "/detail-inpatient-room":
        return [
          { name: "Beranda", path: "/" },
          { name: "Tentang", path: "/about" },
          {
            name: "Layanan",
            submenu: [
              { name: "Poliklinik", path: "/polyclinic" },
              { name: "Kamar Inap", path: "/inpatient-room" },
            ],
          },
          { name: "Dokter", path: "/doctor" },
        ];
      default:
        break;
    }
  };

  const menuItems = getMenuItems();

  const [dropdownLayanan, setDropdownLayanan] = useState(false);
  const toggleDropdownLayanan = () => {
    setDropdownLayanan(!dropdownLayanan);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 start-0 border-b border-sky-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="/">
            <img
              src={RSMKLFull}
              alt="logo-rsmkl-full"
              className="w-32 md:w-60 my-2"
            />
          </a>
        </div>

        {/* IGD Contact */}
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
          <div className="flex flex-row bg-red-600 rounded-lg shadow-lg px-2 py-1 md:px-4 md:py-2">
            <div className="flex justify-center items-center text-white me-2 md:me-4">
              <div className="text-xs md:text-xl">
                <FontAwesomeIcon icon={faPhoneVolume} size="xl" />
              </div>
            </div>
            <div className="flex justify-center text-white text-xs md:text-sm font-semibold">
              <a href="https://wa.link/e0794e">
                <div className="text-center">
                  <p>IGD 24 Jam</p>
                  <p>0822-3205-2900</p>
                </div>
              </a>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-2 md:p-0 my-2 md:my-0 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                {item.submenu ? (
                  <>
                    <div
                      onClick={() => toggleDropdownLayanan()}
                      className="cursor-pointer block py-2 px-3 text-sm md:text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Layanan <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                    {dropdownLayanan && (
                      <ul className="absolute left-0 z-10 mt-2 w-28 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
                        {item.submenu.map((submenuItem) => (
                          <li key={submenuItem.name}>
                            <a
                              href={submenuItem.path}
                              className="block px-3 py-2 text-center text-xs md:text-sm text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-700 rounded"
                            >
                              {submenuItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.path}
                    className="block py-2 px-3 text-sm md:text-base text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
