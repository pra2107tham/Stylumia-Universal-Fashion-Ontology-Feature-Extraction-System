'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Product, Category, categories, sampleProducts } from '../productTypes'

export default function SearchAndFilter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
  })

  const filteredProducts = sampleProducts.filter(product => {
    return (
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.category === '' || product.category === filters.category) &&
      (filters.priceRange === '' || isPriceInRange(product.mrp, filters.priceRange))
    )
  })

  function isPriceInRange(price: number, range: string): boolean {
    switch (range) {
      case 'under1000':
        return price < 1000
      case '1000to5000':
        return price >= 1000 && price < 5000
      case '5000to10000':
        return price >= 5000 && price < 10000
      case 'over10000':
        return price >= 10000
      default:
        return true
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Search & Filter</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Filters</h2>
            <div className="space-y-4">
              <FilterSelect
                label="Category"
                options={categories.map(cat => cat.name)}
                value={filters.category}
                onChange={(value) => setFilters({ ...filters, category: value })}
              />
              <FilterSelect
                label="Price Range"
                options={[
                  { value: 'under1000', label: 'Under ₹1000' },
                  { value: '1000to5000', label: '₹1000 - ₹5000' },
                  { value: '5000to10000', label: '₹5000 - ₹10000' },
                  { value: 'over10000', label: 'Over ₹10000' },
                ]}
                value={filters.priceRange}
                onChange={(value) => setFilters({ ...filters, priceRange: value })}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.productID} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterSelect({ label, options, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map((option) => (
          <option 
            key={typeof option === 'string' ? option : option.value} 
            value={typeof option === 'string' ? option : option.value}
          >
            {typeof option === 'string' ? option : option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={product.feature_image} alt={product.productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.productName}</h3>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-lg font-bold text-indigo-600 mt-2">₹{product.mrp.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-2 truncate">{product.description}</p>
      </div>
    </div>
  )
}

