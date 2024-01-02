// src/components/ProductCard.jsx
const ProductCard = ({ item, onAddToCart }) => {
  return (
    <div className="card max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img
        className="w-[300px] h-64 object-cover"
        src={item.img}
        alt={item.namaBarang}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl">{item.namaBarang}</div>
        <p className="text-gray-700 text-base my-2">
          Harga: Rp {item.hargaBarang.toLocaleString()}
        </p>
        <button
          className="py-1 px-2 font-bold rounded bg-slate-600 text-white transition 
              duration-300 hover:bg-slate-500"
          onClick={onAddToCart}
        >
          tambahkan
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
