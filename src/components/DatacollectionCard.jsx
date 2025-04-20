import React from 'react'
import DataCollectionEachCard from './DataCollectionEachCard'

const DatacollectionCard = () => {
    var EachCards=[{"Title":"Download Template","link":"/downloadtemplate"},
        {"Title":"Upload Data","link":"/uploaddata"},
        {"Title":"Dashboard Sanity Check","link":"/dashboardcheck"},
        {"Title":"Rules & Mapping Tables","link":"/rulesand mapping"},
    ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 p-20">
            {EachCards.map((card, idx) => (
                <DataCollectionEachCard key={idx} data={card} id={idx}/>
            ))}
        </div>
  )
}

export default DatacollectionCard