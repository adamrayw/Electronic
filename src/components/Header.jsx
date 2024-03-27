import { useState, useEffect, Fragment } from "react";
import Checkout from "./Checkout";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../features/searchSlice"; // Check this import statement
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logout from "./register-login/Logout";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [login, setLogin] = useState(false);
  const [profileClicked, setProfileClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckoutClick = () => {
    setIsCheckedOut(!isCheckedOut);
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    dispatch(setSearchInput(inputValue)); // Dispatch setSearchInput action
  };

  const handleProfileClick = () => {
    setProfileClicked(!profileClicked);
  }




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
              className="text-white py-2 px-4 hover:text-gray-200 my-auto mx-2"
              onClick={handleCheckoutClick}
            >
              <BsCart4 size={25} />
            </a>
            {login ? (
              <div className="relative profile" onClick={handleProfileClick}>
                <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                  className="object-cover h-12 w-12 border-2 border-gray-400 rounded-full cursor-pointer" />
                <div className={`${profileClicked ? 'absolute' : 'hidden'} rounded border-2 border-slate-400 bg-white mt-1 p-2 w-32`} >
                  <div className="mb-3">
                    <p className="transform-text-profile">halo user</p>
                  </div>
                  <div className="mb-3">
                    <Link className="transform-text-profile">edit profile</Link>
                  </div>
                  <Logout />
                </div>
              </div>

            ) : (
              <Fragment>
                <Link
                  to="/register"
                  className="bg-white my-auto p-2 block font-semibold text-slate-600 rounded hover:text-slate-300 transition"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="bg-white my-auto p-2 block font-semibold text-slate-600 rounded hover:text-slate-300 transition"
                >
                  Login
                </Link>
              </Fragment>
            )}
          </div>

          <div className="md:hidden flex items-center">
            {isMobile && login && (
              <div className="relative profile me-2" onClick={handleProfileClick}>
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=1765&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover h-12 w-12 border-2 border-gray-400 rounded-full cursor-pointer"
                />
                <div className={`${profileClicked ? 'absolute' : 'hidden'} border-2 border-slate-400 bg-white mt-1 p-2 w-32`}>
                  <div className="mb-3">
                    <p className="transform-text-profile">halo user</p>
                  </div>
                  <div className="mb-3">
                    <Link className="transform-text-profile">edit profile</Link>
                  </div>
                  <Logout />
                </div>
              </div>
            )}
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
              className="block mb-3 text-white hover:text-gray-200"
            >
              Home
            </Link>
            <a
              href="#"
              className="block mb-3 text-white hover:text-gray-200 my-auto"
              onClick={handleCheckoutClick}
            >
              <BsCart4 size={25} />
            </a>
            {!login && (<Fragment>
              <Link
                to="/register"
                className="bg-white block py-2 px-4 mb-2 text-center font-semibold text-slate-600 rounded hover:text-slate-300 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-white block py-2 px-4 text-center font-semibold text-slate-600 rounded hover:text-slate-300 transition"
              >
                Login
              </Link>

            </Fragment>
            )}
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