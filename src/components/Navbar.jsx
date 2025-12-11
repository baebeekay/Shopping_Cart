
import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartTotalItems } = useCart();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">ShopZone</NavLink>
        <div className="flex gap-8 items-center">
          <NavLink to="/" className="hover:text-indigo-200">Home</NavLink>
          <NavLink to="/shop" className="hover:text-indigo-200">Shop</NavLink>
          <NavLink to="/cart" className="relative hover:text-indigo-200">
            <ShoppingCartIcon className="h-7 w-7 inline-block" />
            {cartTotalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartTotalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
            }
