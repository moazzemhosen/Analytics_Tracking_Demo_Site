import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center px-6 py-3 bg-blue-900 shadow-sm">
      {/* justify-between- reomoved because of left aling */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 cursor-pointer"
      >
        {/* <FaArrowLeft /> */}
        <img src="logo_white.png" alt="AXA" srcset=""  className="h-10 w-10 object-cover" />
        
      </button>
      
      <div className="flex space-x-4 ml-60">
        <Link
          to="/"
          className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-50 font-serif text-blue-700 hover: transition"
        >
          HOME
        </Link>
        <Link
          to="/dataCollection"
          className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-50 font-serif text-blue-700 hover: transition"
        >
          DATA COLLECTION
        </Link>
        <Link
          to="/reportDashboard"
          className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-50 font-serif text-blue-700 hover: transition"
        >
          REPORT & DASHBOARD
        </Link>
        <Link
          to="/userManagement"
          className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-50 font-serif text-blue-700 hover: transition"
        >
          USER MANAGEMENT
        </Link>
        <Link
          to="/otherSection"
          className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-50 font-serif text-blue-700 hover: transition"
        >
          OTHER SECTION
        </Link>
        <Link
          to="/analytics"
          className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-50 font-serif text-blue-700 hover: transition"
        >
          YOUR TRACKING DATA
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
