import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "HOME", to: "/" },

  { label: "ABOUT US", to: "/about" },

  {
    label: "SERVICES",
    to: "/services",
  },

  {
    label: "PentaKÜHL",
    to: "/pentakuhl",
    isBlue: true,
    children: [
      { label: "Parcel Shippers", to: "/parcel-shippers" },
      { label: "Pallet Shippers", to: "/pallet-shippers" },
    ],
  },

  { label: "INDUSTRIES", to: "/industries" },

  { label: "CAREERS", to: "/careers" },

  { label: "CONTACT", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="hidden lg:flex h-16 items-center justify-center border-b border-gray-100">
        <nav className="flex items-center gap-14">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[15px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-orange-500"
                      : "text-black hover:text-orange-500"
                  }`
                }
              >
                {/* Normal Links */}
                {!link.isBlue && link.label}

                {/* PentaKÜHL Special Color */}
                {link.isBlue && (
                  <>
                    <span className="text-black">Penta</span>
                    <span className="text-sky-500">KÜHL</span>
                  </>
                )}

                {link.children && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${
                      link.isBlue ? "text-sky-500" : ""
                    }`}
                  />
                )}
              </NavLink>

              {/* Desktop Dropdown */}
              {link.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="w-[220px] bg-[#f4f4f4] rounded-[20px] shadow-xl py-7 px-7 space-y-7">
                    {link.children.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="block text-[16px] text-black hover:text-orange-500 transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="lg:hidden h-[60px] bg-[#f3f3f3] border-b border-gray-200 px-5 flex items-center justify-between">
        {/* Contact Button */}
        <Link
          to="/contact"
          className="bg-[#F47C33] text-white text-[14px] font-semibold px-4 py-2 rounded-xl"
        >
          Contact
        </Link>

        {/* Menu Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X className="w-8 h-8 text-black" strokeWidth={1.5} />
          ) : (
            <Menu className="w-8 h-8 text-black" strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-[60px] left-0 w-full h-screen bg-[#f3f3f3] z-40 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Links */}
        <div>
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-gray-300">
              <div className="flex items-center justify-between px-5 py-5">
                <NavLink
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-[15px] font-semibold tracking-wide ${
                      isActive ? "text-orange-500" : "text-black"
                    }`
                  }
                >
                  {!link.isBlue && link.label}

                  {link.isBlue && (
                    <>
                      <span className="text-black">Penta</span>
                      <span className="text-sky-500">KÜHL</span>
                    </>
                  )}
                </NavLink>

                {link.children && (
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? "" : link.label,
                      )
                    }
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </button>
                )}
              </div>

              {openDropdown === link.label && link.children && (
                <div className="pb-4 pl-8 flex flex-col gap-4">
                  {link.children.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="text-[14px] text-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Contact Info */}
        <div className="px-5 pt-20">
          <h2 className="text-[18px] font-bold text-black mb-5">
            Contact Info
          </h2>

          <a
            href="tel:+912262226222"
            className="block text-[15px] text-black underline mb-5"
          >
            +91 22-6222-6222
          </a>

          <p className="text-[15px] leading-7 text-black underline">
            902, 'A' Wing, Times Square, Andheri-Kurla Road,
            <br />
            Marol, Andheri (East), Mumbai 400 059
          </p>
        </div>
      </div>
    </header>
  );
}
