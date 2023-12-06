// src/components/Checkout.jsx
import { useSelector, useDispatch } from "react-redux";
import { BiX } from "react-icons/bi";

import { addOneQuantity, deleteOneQuantity, deleteOneProduct, updateQuantity } from "../features/CartSlice";
import ProductCheckout from "./ProductCheckout";

const Checkout = ({ isCheckedOut }) => {
  const { cartItems } = useSelector((store) => store.cart);
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

  const handleUpdateQuantity = (item, newQuantity) => {
    if (newQuantity >= 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const calculateTotalPrice = () => {
    const checkedItems = cartItems.filter(item => item.checked === true);
    return checkedItems.reduce((total, item) => {
      return total + item.hargaBarang * item.quantity;
    }, 0);
  };

  const checkoutClassName = isCheckedOut ? "right-0 inline-block" : "hidden";

  console.log(cartItems);

  return (
    <div
      className={`sectionCheckout overflow-scroll absolute top-full ${checkoutClassName} h-[500px] lg:w-1/2 md:w-full sm:w-full bg-slate-300 transition-right duration-500 ease-in-out`}
    >
      <div className="lg:hidden md:hidden sm:block absolute right-0">
        <BiX size={40} />
      </div>
      <div className="container mx-auto p-5 h-full mt-5">
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
                handleUpdateQuantity={handleUpdateQuantity}
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