import logo from "../assets/logo.png";
import { navItems } from "../constants/index";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <div className="flex items-center shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />{" "}
            <span className="text-xl tracking-tight">VirtualIR</span>
          </div>

          {/* Menu Items */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rouded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-linear-to-r from-orange-400 to-orange-800 py-2 px-3  rouded-md">
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
