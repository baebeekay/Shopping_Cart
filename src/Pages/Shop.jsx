import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-2xl">Loading products...</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
             }
