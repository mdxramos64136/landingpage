import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  function toggleNavbar() {
    setMobileDrawerOpen((open) => !open);
  }

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <a href="/" className="flex items-center shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="VirtualIR logo" />{" "}
            <span className="text-xl tracking-tight">VirtualIR</span>
          </a>
          {/* Menu Items */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="hidden md:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md  border-orange-300">
              Sign In
            </a>
            <a
              href="#"
              className="bg-linear-to-r from-orange-400 to-orange-800 py-2 px-3  rounded-md">
              Create an Account
            </a>
          </div>
          {/* Toggle Menu */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              type="button"
              onClick={toggleNavbar}
              aria-label={
                mobileDrawerOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileDrawerOpen}
              aria-controls="mobile-menu">
              {mobileDrawerOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            id="mobile-menu"
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  <a
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border rounded-md  border-orange-300">
                Sign In
              </a>
              <a
                href="#"
                className="bg-linear-to-r from-orange-400 to-orange-800 py-2 px-3 rounded-md">
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
