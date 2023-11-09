// src/components/Checkout.jsx
import { useSelector, useDispatch } from "react-redux";

import { addOneQuantity, deleteOneQuantity,deleteOneProduct } from "../features/CartSlice";
import ProductCheckout from "./ProductCheckout";

const Checkout = ({ isCheckedOut }) => {
  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddOneQuantity = (item) => {
    dispatch(addOneQuantity(item));
  };

  const handleDeleteOneQuantity = (item) => {
    dispatch(deleteOneQuantity(item));
  };
  const handleDeleteOneItem = (item) => {
    dispatch(deleteOneProduct(item));
  };

  // const handleUpdateCartItem = (item, quantity) => {
  //   dispatch(updateCartItem({ id: item.id, quantity }));
  // };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.hargaBarang * item.quantity;
    }, 0);
  };

  const checkoutClassName = isCheckedOut ? "right-0 inline-block" : "hidden";

  console.log(cartItems);

  return (
    <div
      className={`sectionCheckout overflow-scroll absolute top-full ${checkoutClassName} h-[500px] lg:w-1/2 md:w-full sm:w-full bg-slate-300 transition-right duration-500 ease-in-out`}
    >
      <div className="container p-5 h-full">
        {cartItems.length === 0 ? (
          <div className="h-[50%] flex justify-center items-end">
            <p className="text-center font-bold text-xl">Cart masih kosong</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
               <ProductCheckout
               key={item.id}
               item={item}
               handleAddOneQuantity={() => handleAddOneQuantity(item)}
               handleDeleteOneQuantity={() => handleDeleteOneQuantity(item)}
               handleDeleteOneItem={() => handleDeleteOneItem(item)}
             />
            ))}
            <div className="totalharga pb-5 flex flex-col items-end">
              <div className="text-center">
                <h3 className="font-bold">Total Harga</h3>
                <p className="my-2">Rp {calculateTotalPrice().toLocaleString()}</p>
                <button className="px-3 py-2 bg-blue-300 rounded">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;