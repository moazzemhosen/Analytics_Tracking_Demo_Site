import { AlertTriangle } from 'lucide-react';
import React from 'react'
import Navbar from '../components/Navbar';

const NotReadyPage = () => {
    return (

        <div id="6">
  <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 sm:px-6 lg:px-8 py-10">
    <div className="bg-yellow-100 text-yellow-600 rounded-full p-4 mb-6 shadow w-20 h-20 sm:w-24 sm:h-24">
      <AlertTriangle className="w-full h-full" />
    </div>

    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
      Page Not Ready
    </h1>
    <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
      This page is currently under development. Please check back soon or contact the team for more information.
    </p>
  </div>
</div>

    )
}

export default NotReadyPage;