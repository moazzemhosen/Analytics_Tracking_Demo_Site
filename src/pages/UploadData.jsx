import React from 'react'
import Navbar from '../components/Navbar';
import Float from './Float';

const UploadData = () => {
    return (
        <div id="5">
  <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-10">
    <p className="text-red-600 text-lg sm:text-xl font-semibold mb-4 text-center">
      Do not change your file name!
    </p>

    <div className="bg-gray-200 px-4 py-2 rounded text-xs sm:text-sm font-mono text-gray-800 mb-6 w-full max-w-2xl text-center overflow-x-auto">
      country_entity_agency_stream_campaign-type_start-mmyy_end-mmyy_channel_media-data-collection-template.xlsx
    </div>

    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow"
      id="A500"
    >
      Download template
    </button>
  </div>
  <Float />
</div>

    )
}

export default UploadData; 