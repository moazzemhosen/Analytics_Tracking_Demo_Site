import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left logo and back button */}
        <div className="flex items-center space-x-2">
          <button onClick={() => navigate(-1)} className="cursor-pointer">
            <img src="logo.png" alt="" className="h-10 w-10 object-cover" />
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="A1"
          >
            HOME
          </Link>
          <Link
            to="/dataCollection"
            className="px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="B1"
          >
            DATA COLLECTION
          </Link>
          <Link
            to="/product"
            className="px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="C1"
          >
            PRODUCT
          </Link>
          <Link
            to="/aboutanalytics"
            className="px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="D1"
          >
            ABOUT ANALYTICS
          </Link>

          <Link
            to="/analytics"
            className="px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="E1"
          >
            REPORT & DASHBOARD
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col items-start px-6 pb-4 space-y-2 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="A1"
          >
            HOME
          </Link>
          <Link
            to="/dataCollection"
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="B1"
          >
            DATA COLLECTION
          </Link>
          <Link
            to="/reportDashboard"
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="C1"
          >
            PRODUCT
          </Link>
          
          <Link
            to="/aboutanalytics"
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="D1"
          >
            ABOUT ANALYTICS
          </Link>
          <Link
            to="/analytics"
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition-all font-serif"
            id="E1"
          >
            REPORT & DASHBOARD
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
