import { useState, useEffect, Fragment } from "react";
import Checkout from "./Checkout";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./register-login/Logout";
import { BsCart4 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { getOneCart, getProductCart } from "../services/apiServices";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [query, setQuery] = useState("");
  const [product, setProduct] = useState([])


  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await getProductCart();
      console.log(`GET PRODUCT CART =`, response);
      const userId = localStorage.getItem('userid');
      if (userId && response.data.cart) {
        // Filter the cart items based on the user ID
        const userCart = response.data.cart.filter(item => item.userId === userId);
        console.log(`User Cart:`, userCart);
        setProduct(userCart);
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('token');
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }

    fetchData()
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search-product?query=${encodeURIComponent(query)}`)
    }
  }

  const totalQuantity = product.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav className="z-50 fixed top-0 bg-slate-600 w-full p-4">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center">
            <Link to='/' className="text-white logo-header font-bold text-2xl hidden lg:inline-block me-1">Electronic</Link>
          </div>
          <div className="form-control mx-1 w-full">
            <form onSubmit={handleSearch}>
              <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} className="input input-bordered w-full" />
            </form>
          </div>

          <div className="flex">
            <div className="text-white py-2 px-4  my-auto mx-1 flex">
              <Link to='/'>
                <IoHomeOutline size={25} className="hover:text-gray-200 me-4 z-[100]" />
              </Link>
              <Link className='relative' to='/cart'>
                <BsCart4 size={25} className="hover:text-gray-200" />
                <div className="absolute -top-2 -right-4 bg-red-700 text-white rounded-full px-2 ">{totalQuantity}</div>
              </Link>
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
              <div className="flex gap-3">
                <Link
                  to="/register"
                  className="bg-white my-auto p-2 font-semibold text-slate-600 rounded hover:text-slate-300 transition"
                >
                  Masuk
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav >
    </header >
  );
};

export default Header;
