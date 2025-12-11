export default function Home() {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to ShopZone</h1>
      <p className="text-xl text-gray-600 mb-10">Your one-stop shop for amazing products!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Fast Shipping</h3>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Best Prices</h3>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">24/7 Support</h3>
        </div>
      </div>
    </div>
  );
}
