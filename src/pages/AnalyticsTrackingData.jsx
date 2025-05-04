import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import MermaidChart from './MermaidChart';
import Cookies from 'js-cookie';



const AnalyticsTrackingData = () => {
  const [cookie, setCookie] = useState([])

  const handleErase = () => {
    // Clear the 'userToken' cookie
    Cookies.remove('userToken');
    
    // Reload the page
    window.location.reload();
  };

  const actionMapping = {
    "001": "SUBMITTED LOGIN FORM",
    "A1": "HOME",
    "B1": "DATA COLLECTION",
    "C1": "REPORT & DASHBOARD",
    "D1": "USER MANAGEMENT",
    "E1": "OTHER SECTION",
    "F1": "ANALYTICS TRACKING",

    //HOMEPAGE CARD
    "A10": "DATA COLLECTION",
    "A11": "REPORT & DASHBOARD",
    "A12": "USER MANAGEMENT",
    "A13": "OTHER SECTION",

    //DATA COLLECTION DETAILS
    "A100": "Download Template",
    "A101": "Upload Data",
    "A102": "Dashboard & Sanity Check",
    "A103": "Rules & Mapping Tables",

    //EXTRA CHECK
    "A500": "Download Template Click",
    "B500": "Generate Template",

    // Add more mappings as needed
  };


  const generateMermaidChart = (cookieArray) => {
    if (cookieArray.length < 2) return "graph TD\n  A[Start]";

    let lines = ["graph TD"];
    for (let i = 0; i < cookieArray.length - 1; i++) {
      const fromCode = cookieArray[i];
      const toCode = cookieArray[i + 1];
      const fromLabel = actionMapping[fromCode] || fromCode;
      const toLabel = actionMapping[toCode] || toCode;

      lines.push(`  ${fromCode}["${fromLabel}"] --> ${toCode}["${toLabel}"]`);
    }
    return lines.join("\n");
  };

  const chart = generateMermaidChart(cookie);

  function getCookie() {
    var nameEQ = "userToken" + "=";
    var ca = document.cookie.split('&');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length)); // Decoding the cookie value
      }
    }
    return null; // Return null if the cookie is not found
  }
  useEffect(() => {
    var userToken = getCookie();
    if (userToken) {
      // Split the cookie value by "&" and convert it into an array
      var userTokenArray = userToken.split("&");
      setCookie(userTokenArray)
    } else {
      console.log("userToken cookie not found.");
    }
  }, [])


  return (
    <div id="Analytics Tracking" className="min-h-screen bg-gray-100">
    <Navbar />
    
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6">
      <button
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow mb-6"
        onClick={handleErase} // Call handleErase function on click
      >
        Erase
      </button>
      
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Analytics Tracked Data
        </h1>
        <MermaidChart chart={chart} />
      </div>
    </div>
  </div>
  )

}

export default AnalyticsTrackingData;