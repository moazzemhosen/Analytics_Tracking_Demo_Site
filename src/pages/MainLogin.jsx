import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const MainLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAuthenticated = login(username, password);
    if (isAuthenticated) {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'loginsubmit',
          email: username,
          click_ID: "001"
        });
        console.log('Form submitted and dataLayer event pushed.');
      }
      navigate('/');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Please fill in both email and password before continuing.',
        confirmButtonColor: '#3B82F6',
      });
      
    }
  };

  const slides = ["imag1.jpg", "image33.jpg", "image66.jpg", "image77.jpg"];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div id="1" className="min-h-screen flex flex-col md:flex-row">
      {/* Left - Image Slider */}
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200 relative flex items-center justify-center">
        <img src={slides[current]} alt="Slide" className="w-full h-full object-cover" />

        {/* Dots */}
        <div className="absolute bottom-4 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>


      {/* Right - Login Form */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">

          {/* Left: Image */}
          <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-8">
            <img
              src="login.jpg"
              alt="Login visual"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-10">
            <form
              id="LoginForm"
              className="w-full max-w-md"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold text-center mb-2">Welcome Back!</h2>
              <p className="text-sm text-center text-gray-500 mb-6">
                Sign in with your email to continue.
              </p>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-4 text-right">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
