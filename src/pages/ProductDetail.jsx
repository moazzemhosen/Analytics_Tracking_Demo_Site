import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const productMap = {
  '11': {
    name: 'Samsung Galaxy S24 5G (Amber Yellow, 256 GB)',
    price: 50999,
    originalPrice: 79999,
    image: 'https://images.samsung.com/uk/smartphones/galaxy-s24/images/galaxy-s24-highlights-kv.jpg?imbypass=true',
    rating: 4.5,
    reviews: 180,
  },
  '22': {
    name: 'Motorola G85 5G (Cool Green, 128 GB)',
    price: 14999,
    originalPrice: 17999,
    image: 'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g85-1.jpg',
    rating: 4.2,
    reviews: 150,
  },
  '33': {
    name: 'Apple iPhone 13 (Pink, 128 GB)',
    price: 39999,
    originalPrice: 59999,
    image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large_2x.jpg',
    rating: 4.6,
    reviews: 500,
  },
  '44': {
    name: 'OnePlus 12R 5G (Iron Gray, 256 GB)',
    price: 39999,
    originalPrice: 45999,
    image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12r-1.jpg',
    rating: 4.4,
    reviews: 220,
  },
  '55': {
    name: 'Google Pixel 7a (Charcoal, 128 GB)',
    price: 34999,
    originalPrice: 42999,
    image: 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-7a-1.jpg',
    rating: 4.3,
    reviews: 175,
  },
  '66': {
    name: 'Nothing Phone (2) (Transparent Gray, 256 GB)',
    price: 44999,
    originalPrice: 49999,
    image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Pixel_7A_Colors_1.width-1000.format-webp.webp',
    rating: 4.1,
    reviews: 140,
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productMap[id];

  const [showAdded, setShowAdded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pin: '',
    phone: '',
    payment: 'card',
  });
  const [trackedFields, setTrackedFields] = useState({});

  if (!product) return <div className="p-4 text-red-600">Product not found.</div>;

  const handleAddToCart = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "add_to_cart",
      name: productMap[id].name,
      aid:id+"6",
    });
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  const handleBuyNow = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "buy_now",
      name: productMap[id].name,
      aid:id+"5",
    });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = (e) => {
    const { name, value, placeholder } = e.target;
    if (value.trim() !== '' && trackedFields[name] !== value) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: placeholder,
        name: value,
      });
      setTrackedFields((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePlaceOrder = () => {
    setShowPopup(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "PlacedOrder",
      name: "PlacedOrder",
      pid: id + "00",
    });
    setFormData({ name: '', address: '', pin: '', phone: '', payment: 'card' });
    setShowForm(false);
  };

  const isFormComplete =
    formData.name.trim() &&
    formData.address.trim() &&
    formData.pin.trim() &&
    formData.phone.trim() &&
    formData.payment.trim();

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row p-4 gap-6">
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="text-green-600 font-semibold text-xl">
            ₹{product.price.toLocaleString()}
            <span className="text-gray-500 line-through ml-2 text-sm">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
          <div className="text-yellow-500">⭐ {product.rating} ({product.reviews} Reviews)</div>

          <button
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>

          <button id={`${id}${id}1`}
            onClick={handleBuyNow}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded ml-2"
          >
            Buy Now
          </button>

          {showAdded && (
            <div className="mt-2 text-green-600 font-semibold">
              ✅ Product added to your cart!
            </div>
          )}

          {showForm && (
            <form className="mt-6 space-y-4 bg-gray-50 p-10 rounded shadow-sm">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="pin"
                placeholder="PIN Code"
                value={formData.pin}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div>
                <label className="block mb-1 font-medium">Payment Method</label>
                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="card">Card</option>
                  <option value="cash">Cash on Delivery</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
              <button
                id="PlaceOrder"
                type="button"
                onClick={handlePlaceOrder}
                disabled={!isFormComplete}
                className={`w-full py-2 px-4 rounded text-white ${isFormComplete
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-300 cursor-not-allowed'
                  }`}
              >
                Place Your Order
              </button>
            </form>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg text-center animate-slideInUp">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">🎉 Order Placed!</h2>
            <p className="mb-4 text-gray-700">Thank you for your purchase. Here are your order details:</p>
            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mx-auto mb-4" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
