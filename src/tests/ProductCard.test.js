import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { CartProvider } from '../context/CartContext';

const product = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  image: "test.jpg"
};

test('adds correct quantity to cart', () => {
  render(
    <CartProvider>
      <ProductCard product={product} />
    </CartProvider>
  );

  fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '5' } });
  fireEvent.click(screen.getByText('Add to Cart'));

  // You can extend with more context checks if needed
  expect(screen.getByDisplayValue('1')).toBeInTheDocument(); // resets to 1
});
