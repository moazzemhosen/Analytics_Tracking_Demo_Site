import React from 'react'
import { FaDatabase, FaUsers } from 'react-icons/fa'
import { HiDotsCircleHorizontal } from 'react-icons/hi'
import {  MdSpaceDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Hcard = ({ data,id }) => {
    const icons = [
        <FaDatabase className="h-5 w-5 text-blue-800" />,
        <MdSpaceDashboard className="h-5 w-5 text-blue-800" />,
        <FaUsers className="h-6 w-6 text-blue-800" />,
        <HiDotsCircleHorizontal className="h-6 w-6 text-blue-800" />,
      ];
      
      return (
        <Link
          to={data.link}
          id={`A1${id}`}
          className="w-full bg-white border border-gray-200 shadow-md rounded-xl p-4 flex items-start gap-4 transition hover:shadow-lg"
        >
          <div className="bg-blue-100 p-3 rounded-full">
            {icons[id]}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{data.Name}</h2>
            <p className="text-sm text-gray-600 mt-1">{data.Details}</p>
          </div>
        </Link>
      )
}

export default Hcard