import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-4">
    <div className="w-full h-64 mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain rounded-md bg-gray-50"
      />
    </div>
    <div className="px-2">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">₹{product.price.toLocaleString()}</p>
      <p className="text-sm text-green-600">{product.tag}</p>
    </div>
  </div>
  
  )
}

export default ProductCard