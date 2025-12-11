import { useState } from 'react';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={product.image} alt={product.title} className="w-full h-64 object-contain p-4" />
      <div className="p-4">
        <h3 className="font-semibold text-lg h-14 overflow-hidden">{product.title}</h3>
        <p className="text-2xl font-bold text-indigo-600 mt-2">${product.price}</p>
        
        <div className="flex items-center mt-4 gap-2">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="btn">-</button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 text-center border rounded px-2 py-1"
          />
          <button onClick={() => setQuantity(quantity + 1)} className="btn">+</button>
        </div>

        <button
          onClick={handleAdd}
          className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
