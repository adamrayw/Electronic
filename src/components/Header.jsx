import { useState } from "react";
import Checkout from "./Checkout";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckoutClick = () => {
    // Toggle nilai isCheckedOut saat link "Checkout" diklik
    setIsCheckedOut(!isCheckedOut);
  };

  return (
    <header className="relative">
      <nav className="fixed top-0 bg-slate-400 w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">Electronic</div>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200"
              onClick={handleCheckoutClick}
            >
              Checkout
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Navbar */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <a
              href="#"
              className="block py-2 px-4 text-white hover:text-gray-200"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-white hover:text-gray-200"
              onClick={handleCheckoutClick}
            >
              Checkout
            </a>
          </div>
        )}
        <Checkout isCheckedOut={isCheckedOut} />
      </nav>
    </header>
  );
};

export default Header;