import { useState } from "react";
import Checkout from "./Checkout";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../features/searchSlice"; // Check this import statement
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [searchValue, setSearchValue] = useState(''); // Add local state for search input

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    setIsCheckedOut(!isCheckedOut);
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    dispatch(setSearchInput(inputValue)); // Dispatch setSearchInput action
  };

  return (
    <header>
      <nav className="z-50 fixed top-0 bg-slate-600 w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">Electronic</div>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cari..."
              value={searchValue}
              onChange={handleSearchChange}
              className="border border-gray-300 px-2 py-1 rounded-md ml-4"
            />
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="block py-2 px-4 text-white hover:text-gray-200"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-white hover:text-gray-200 my-auto"
              onClick={handleCheckoutClick}
            >
              <BsCart4 size={25} />
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
            <Link
              to="/"
              className="block py-2 px-4 text-white hover:text-gray-200"
            >
              Home
            </Link>
            <a
              href="#"
              className="block py-2 px-4 text-white hover:text-gray-200 my-auto"
              onClick={handleCheckoutClick}
            >
              <BsCart4 size={25} />
            </a>
          </div>
        )}

        {isCheckedOut &&
          <Checkout isCheckedOut={handleCheckoutClick} />
        }
      </nav>
    </header>
  );
};

export default Header;