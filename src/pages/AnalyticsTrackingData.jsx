import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import MermaidChart from './MermaidChart';

import Cookies from 'js-cookie';



const AnalyticsTrackingData = () => {
  const [cookie, setCookie] = useState([])
console.log("CCC",cookie)
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
    "C1": "PRODUCT",
    "D1": "ABOUT ANALYTICS",
    "E1": "REPORT & DASHBOARD",
  

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
    "11":"Samsung Galaxy S24",
    "22":"Motorola G85 5G",
    "33":"Apple iPhone 13",
    "44":"OnePlus 12R",
    "55":"Google Pixel 7a",
    "66":"Nothing Phone (2)",

    //cart value add button
    "116":"Samsung Galaxy S24 (Added to cart)",
    "226":"Motorola G85 5G (Added to cart)",
    "336":"Apple iPhone 13 (Added to cart)",
    "446":"OnePlus 12R (Added to cart)",
    "556":"Google Pixel 7a (Added to cart)",
    "666":"Nothing Phone (2) (Added to cart)",
    //buy now value add button
    "115":"Samsung Galaxy S24 (Buy Form Opned)",
    "225":"Motorola G85 5G (Buy Form Opned)",
    "335":"Apple iPhone 13 (Buy Form Opned)",
    "445":"OnePlus 12R (Buy Form Opned)",
    "555":"Google Pixel 7a (Buy Form Opned)",
    "665":"Nothing Phone (2) (Buy Form Opned)",

    //buy product
    "1100":"Samsung Galaxy S24 (Order Placed)",
    "2200":"Motorola G85 5G (Order Placed)",
    "3300":"Apple iPhone 13 (Order Placed)",
    "4400":"OnePlus 12R (Order Placed)",
    "5500":"Google Pixel 7a (Order Placed)",
    "6600":"Nothing Phone (2) (Order Placed)",

    //Cookie Preference
    "T":"Accepted Cookie",
    "F":"Rejected Cookie",
    "007":"Order Placed",
    "v1":"Video Played"
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
    const nameEQ = "userToken=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length));
      }
    }
    return null;
  }
  
  useEffect(() => {
    var userTokenn = getCookie();
    console.log("suse",userTokenn);
    
    if (userTokenn) {
      // Split the cookie value by "&" and convert it into an array
      var userTokenArray = userTokenn.split("&");
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
        Delete Your Data
      </button>
      
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Analytics Tracked Click Event Data
        </h1>
        <MermaidChart chart={chart} />
      </div>
    </div>
  </div>
  )

}

export default AnalyticsTrackingData;