import { AlertTriangle } from 'lucide-react';
import React from 'react'
import Navbar from '../components/Navbar';

const NotReadyPage = () => {
    return (

        <div id='6'>
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
                <div className="bg-yellow-100 text-yellow-600 rounded-full p-4 mb-4 shadow">
                    <AlertTriangle className="w-12 h-12" />
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Page Not Ready
                </h1>
                <p className="text-gray-500 max-w-md">
                    This page is currently under development. Please check back soon or contact the team for more information.
                </p>
            </div>
        </div>
    )
}

export default NotReadyPage;