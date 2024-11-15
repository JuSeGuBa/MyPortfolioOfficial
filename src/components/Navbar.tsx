import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "me-section", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const Navbar = () => {
  const navItemClasses =
    "text-gray-300 hover:bg-[#444] hover:text-white hover:scale-110 transition-all duration-300 ease-in-out rounded-md px-4 py-3 text-sm font-medium";
  const activeNavItemClasses =
    "bg-[#444] text-white hover:text-white hover:scale-110 transition-all duration-300 ease-in-out rounded-md px-4 py-3 text-sm font-medium";

  return (
    <Disclosure
      as="nav"
      className="bg-[#222] sticky top-0 z-50 rounded-xl shadow-md border-4 border-[#444]"
    >
      <div className="mx-auto max-w-8xl px-3 sm:px-6 lg:px-10 py-3">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#444] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </Disclosure.Button>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Logo"
                src="/public/sinfondo(logo).png"
                className="h-14 w-auto transform transition duration-300 ease-in-out hover:scale-110"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    className={
                      item.current ? activeNavItemClasses : navItemClasses
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Profile Image (No longer a button) */}
          <div className="relative ml-3">
            <img
              alt="Profile"
              src="/public/foto.jpg"
              className="h-14 w-14 rounded-full transform transition duration-300 ease-in-out hover:scale-110" // Añadimos el hover para que se agrande
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={
                item.current
                  ? "bg-[#444] text-white"
                  : "text-gray-300 hover:bg-[#444] hover:text-white"
              }
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default Navbar;
