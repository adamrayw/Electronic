import { useEffect, useState } from 'react';
import { getOneCart } from '../services/apiServices';
import { BsCart4 } from "react-icons/bs";

const Checkout = () => {
  const [carts, setCarts] = useState([]);
  const userid = localStorage.getItem('userid');

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await getOneCart();
        console.log(response);
        setCarts(response.data.cart);
      } catch (error) {
        console.error('error fetching data', error);
      }
    };

    fetchCarts();
  }, []);

  // Filter carts berdasarkan userId
  const userCarts = carts.filter(cart => cart.userId === userid);
  console.log(userCarts);

  return (
    <div>
      <div className="drawer drawer-end z-20">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button"><BsCart4 size={30} /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          {userCarts.map((carts) => (
            <div className=''>
              <ul key={carts.id} className="menu p-4 w-80 min-h-full bg-slate-300 text-slate-800">
                {/* Sidebar content here */}
                <li>{carts.product.namaBarang}</li>
                <li>{carts.product.hargaBarang}</li>
              </ul>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Checkout;
