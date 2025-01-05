'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Product, sampleProducts } from '../productTypes'

// Enhanced recommendation logic
function getRecommendations(selectedProduct: Product): { similar: Product[], crossCategory: Product[] } {
  const similar = sampleProducts
    .filter(p => p.category === selectedProduct.category && p.productID !== selectedProduct.productID)

  const crossCategory = sampleProducts
    .filter(p => p.category !== selectedProduct.category)
    .slice(0, 6)  // Limit to 6 cross-category recommendations

  return { similar, crossCategory }
}

export default function Recommendations() {
  const [selectedProduct, setSelectedProduct] = useState(sampleProducts[0])
  const [showModal, setShowModal] = useState(false)
  const [modalProduct, setModalProduct] = useState<Product | null>(null)

  const recommendations = getRecommendations(selectedProduct)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Recommendations</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select a Product</h2>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={selectedProduct.productID}
          onChange={(e) => setSelectedProduct(sampleProducts.find(p => p.productID === e.target.value) || sampleProducts[0])}
        >
          {sampleProducts.map(product => (
            <option key={product.productID} value={product.productID}>{product.productName}</option>
          ))}
        </select>
      </div>
      <div className="space-y-12">
        <RecommendationSection
          title="Similar Items"
          products={recommendations.similar}
          setModalProduct={setModalProduct}
          setShowModal={setShowModal}
        />
        <RecommendationSection
          title="Cross-Category Recommendations"
          products={recommendations.crossCategory}
          setModalProduct={setModalProduct}
          setShowModal={setShowModal}
        />
      </div>
      {showModal && modalProduct && (
        <RecommendationModal
          product={modalProduct}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

function RecommendationSection({ title, products, setModalProduct, setShowModal }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-black mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.productID}
            product={product}
            onClick={() => {
              setModalProduct(product)
              setShowModal(true)
            }}
          />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 text-gray-950" onClick={onClick}>
      <img src={product.feature_image} alt={product.productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black truncate">{product.productName}</h3>
        <p className="text-sm text-black">{product.category}</p>
        <p className="text-lg font-bold text-indigo-600 mt-2">₹{product.mrp.toFixed(2)}</p>
      </div>
    </div>
  )
}

function RecommendationModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
          <h2 className="text-2xl font-semibold text-gray-900">{product.productName}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <img src={product.feature_image} alt={product.productName} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <p className="mb-4">{product.description}</p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ₹{product.mrp.toFixed(2)}</p>
            <p><strong>Channel ID:</strong> {product.channel_id}</p>
            {product.feature_list && product.feature_list.length > 0 && (
              <>
                <h4 className="text-md font-semibold mt-4 mb-2">Features:</h4>
                <ul className="list-disc list-inside">
                  {product.feature_list.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end sticky bottom-0">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

