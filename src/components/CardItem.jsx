import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-6 py-6 border-b last:border-b-0">
      <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn">-</button>
        <span className="w-12 text-center font-medium">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn">+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline ml-6">
        Remove
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
