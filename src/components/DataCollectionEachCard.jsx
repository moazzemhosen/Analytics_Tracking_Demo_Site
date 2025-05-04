import React from 'react'
import { HiTemplate } from 'react-icons/hi'
import { MdCloudUpload, MdFactCheck } from 'react-icons/md'
import { PiMicrosoftExcelLogoBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const DataCollectionEachCard = ({data,id}) => {
  const icons = [
    <HiTemplate className="h-10 w-10 text-blue-800" />,
    <MdCloudUpload className="h-10 w-10 text-blue-800" />,
    <MdFactCheck className="h-10 w-10 text-blue-800" />,
    <PiMicrosoftExcelLogoBold className="h-10 w-10 text-blue-800" />,
  ];
  
  return (
    <Link
      to={data.link}
      id={`A10${id}`}
      className="w-full bg-white border border-gray-200 shadow-md rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:shadow-lg transition"
    >
      <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
        {icons[id]}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{data.Title}</h2>
      </div>
    </Link>
  );
}

export default DataCollectionEachCard