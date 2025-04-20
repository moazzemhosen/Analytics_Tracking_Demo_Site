import React from 'react'
import { HiTemplate } from 'react-icons/hi'
import { MdCloudUpload, MdFactCheck } from 'react-icons/md'
import { PiMicrosoftExcelLogoBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const DataCollectionEachCard = ({data,id}) => {
    const icon=[<HiTemplate className='h-10 w-10'/>,<MdCloudUpload className='h-10 w-10' />,<MdFactCheck className='h-10 w-10' />,<PiMicrosoftExcelLogoBold className='h-10 w-10'/>]
  return (
    <Link to={data.link} className="max-w-full min-h-30 bg-white border border-gray-200 shadow-lg rounded-lg p-2 flex gap-4 items-center">
            <div className="bg-blue-100 p-2 rounded-full items-center">
                {/* <BellIcon className="h-6 w-6 text-blue-600" /> */}
                {icon[id]}
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-800">{data.Title}</h2>
             
            </div>
        </Link>
  )
}

export default DataCollectionEachCard