import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Float from './Float';

const DownloadTemp = () => {

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Generate Campaign Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Country</label>
                <select className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Select country</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Entity</label>
                <select className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Select entity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Agency</label>
                <select className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Select agency</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Stream</label>
                <select className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Select stream</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Campaign Type</label>
                <select className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Select campaign type</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Start Date</label>
                <input type="date" className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">End Date</label>
                <input type="date" className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Media Type</label>
                <select className="w-full mt-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Select media type</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/uploaddata">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                Generate Template
              </button></Link>
          </div>
        </div>
      </div>
      <Float/>
    </div>
  )
}

export default DownloadTemp;

