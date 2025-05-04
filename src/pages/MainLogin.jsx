import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Float from './Float';



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
                  click_ID:"001" // Optionally, do not push the password for security reasons
                });
                console.log('Form submitted and dataLayer event pushed.');
              }
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    const slides = [
        "imag1.jpg",
        "image33.jpg",
        "image66.jpg",
        "image77.jpg",
    ];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    
    return (
        <>
        <div id='1' className="min-h-screen flex">
            {/* Left side - Image Slider */}
            <div className="w-1/2 bg-gray-200 relative flex items-center justify-center">
                <img src={slides[current]} alt="Slide" className="w-full h-full object-cover" />
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 p-2 rounded-full"
                >
                    {"<"}
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 p-2 rounded-full"
                >
                    {">"}
                </button>
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

            {/* Right side - Login Form */}
            <div className="w-1/2 flex items-center justify-center bg-white">
                <form className="w-96 p-8 shadow-lg rounded-lg bg-white" onSubmit={handleSubmit}>
                    <img
                        src="logo.png"
                        alt="AXA GBS"
                        className="w-20 mx-auto mb-6"
                    />
                    <h2 className="text-xl font-semibold text-center mb-1">Welcome back!</h2>
                    <p className="text-sm text-center text-gray-500 mb-6">Please login with your AXA account.</p>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter Your Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 text-right">
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                    <button id="001"
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        
        </>
    );
};

export default MainLogin