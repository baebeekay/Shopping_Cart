import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { cart, cartTotalItems } = useCart();

  if (cartTotalItems === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Your cart is empty</h2>
        <p className="text-gray-600 mt-4">Go add some items!</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Shopping Cart ({cartTotalItems} items)</h1>
      <div className="bg-white rounded-xl shadow-lg p-6">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="border-t pt-6 mt-6 text-right">
          <p className="text-2xl font-bold">
            Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
         }
