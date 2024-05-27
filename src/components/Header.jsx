import { useState, useEffect, Fragment } from "react";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import Logout from "./register-login/Logout";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <header>
      <nav className="z-50 fixed top-0 bg-slate-600 w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">Electronic</div>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-auto" />
          </div>

          <div className="flex space-x-4">
            <Link
              to="/"
              className="py-2 px-4 text-white hover:text-gray-200 text-xl font-bold"
            >
              Home
            </Link>
            <div className="text-white py-2 px-4 hover:text-gray-200 my-auto mx-2">
              <BsCart4 size={30} />
            </div>
            {login ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li><a>Profile</a></li>
                  <li><a>Settings</a></li>
                  <li><Logout /></li>
                </ul>
              </div>
            ) : (
              <Fragment>
                <Link
                  to="/register"
                  className="bg-white my-auto p-2 font-semibold text-slate-600 rounded hover:text-slate-300 transition"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="bg-white my-auto p-2 font-semibold text-slate-600 rounded hover:text-slate-300 transition"
                >
                  Login
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </nav >
    </header >
  );
};

export default Header;
