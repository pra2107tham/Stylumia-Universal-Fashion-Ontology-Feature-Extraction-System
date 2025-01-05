'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import ontologyImage from '../diagram-export-1-5-2025-12_20_19-PM.png' // Import the image

// Dynamically import ReactJson to avoid SSR issues
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false })

const ontologyData = {
  Product: {
    properties: [
      'productID',
      'productName',
      'description',
      'mrp',
      'pdp_url',
      'feature_image',
      'feature_image_s3',
      'channel_id',
      'feature_list',
      'meta_info'
    ],
    relationships: {
      BELONGS_TO: 'Category',
      BRAND: 'Brand',
      SOLD_BY: 'Retailer',
      ASSOCIATED_WITH: 'Department',
      HAS_ATTRIBUTE: 'StyleAttribute'
    }
  },
  Category: {
    values: [
      'Watches',
      'T-Shirts',
      'Kurtis',
      'Dresses',
      'Earrings',
      'Jeans',
      'Sarees',
      'Sneakers',
      'Bathroom Vanities',
      'Shirts'
    ]
  },
  StyleAttributes: {
    'Bathroom Vanities': [
      'Top Material', 'Vanity Features', 'Top Color', 'Assembled', 'Sink Color',
      'Product Depth (in.)', 'Faucet Included', 'Number of Shelves Included in Cabinet',
      'Mirror Height (in.)', 'Cabinet Color', 'Internet Sku', 'Cabinet Color Family',
      'Top Color Family', 'Basin Depth (in.)', 'Cabinet Shade', 'Top weight (lb.)',
      'Sink Color Family', 'Number of Sinks', 'Manufacturer Warranty',
      'Vanity Top Thickness (in.)', 'Hardware Finish Family', 'Style', 'Sink Type',
      'Sink Material', 'Basin Length (in.)', 'Mirror Width (in.)', 'Backsplash Height (in.)',
      'Cabinet Width (in.)', 'Cabinet & Top Assembled weight (lbs)', 'Mirror Features',
      'Returnable', 'Vanity Top Edge Type', 'Sink Location', 'Cabinet Height (in.)',
      'Product Width (in.)', 'Included', 'Cabinet Material', 'Backsplash Included',
      'Vanity Type', 'Cabinet Depth (in.)', 'Store Sku', 'Sink Shape', 'Mirror Included',
      'Faucet Hole Spacing (in.)', 'Number of Drawers', 'Model', 'Basin Width (in.)',
      'Product Height (in.)'
    ],
    'Kurtis': ['Supplier Information'],
    'Dresses': [
      'Care Instructions', 'Composition', 'Description', 'Sleeve Length', 'Size',
      'Material', 'Fit', 'Country of Production', 'Price (MRP)', 'Date of Manufacture',
      'Length', 'Additional Material Information', 'Style', 'Common Generic Name',
      'Net Quantity', 'Date of Import'
    ],
    'Earrings': ['Size & Fit', 'Details & Care'],
    'Jeans': [
      'Composition', 'Color', 'Goods SN', 'Material', 'Waist Line', 'Type', 'Details',
      'Fit Type', 'Care Instructions', 'Lined for Added Warmth', 'Belt', 'Length',
      'Pattern Type', 'Features', 'Closure Type', 'Pockets', 'Fabric', 'Sheer'
    ],
    'Sarees': [],
    'Sneakers': [
      'Sole Material', 'Pattern', 'Toe Shape', 'Occasion', 'Material & Care',
      'BIS Certificate Image URL', 'BIS Expiry Date', 'Micro Trend', 'Material',
      'Insole', 'Type', 'Fastening', 'Seller Name', 'BIS Certificate Number',
      'Shoe Width', 'Ankle Height', 'Sustainable', 'Number of Items', 'Package Contains'
    ],
    'T-Shirts': [
      'Fit', 'Care Instructions', 'Composition', 'Sleeve Length', 'Neckline',
      'Length', 'Imported', 'Detailed Description', 'Model Size', 'Material'
    ],
    'Watches': [
      'Calendar Type', 'Date First Available', 'Part Number', 'Band Colour', 'ASIN',
      'Dial Colour', 'Product Dimensions', 'Bezel Function', 'Special Features',
      'Case Thickness', 'Department', 'Display Type', 'Warranty Type', 'Manufacturer',
      'Net Quantity', 'Case Material', 'Importer', 'Crystal Material', 'Movement',
      'Warranty', 'Item Model Number', 'Model Number', 'Generic Name', 'Band Size',
      'Packer', 'Case Diameter', 'Brand', 'Case Shape', 'Bezel Material',
      'Band Material', 'Clasp', 'Band Width', 'Item Dimensions (LxWxH)',
      'Country of Origin', 'Item Weight'
    ],
    'Shirts': [
      'Composition', 'Sleeve Length', 'Neckline', 'Color', 'Sleeve Type', 'Goods SN',
      'Material', 'Hem Shaped', 'Type', 'Details', 'Fit Type', 'Care Instructions',
      'Length', 'Pattern Type', 'Style', 'Fabric', 'Placket', 'Sheer'
    ]
  }
}

export default function OntologyExplorer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedPaths, setExpandedPaths] = useState(['root'])
  const [isZoomed, setIsZoomed] = useState(false)

  const handleSearch = (searchTerm: string) => {
    const newExpandedPaths = ['root']
    const searchTermLower = searchTerm.toLowerCase()

    const searchInObject = (obj: any, path: string) => {
      for (const [key, value] of Object.entries(obj)) {
        const newPath = `${path}.${key}`
        if (typeof value === 'string' && value.toLowerCase().includes(searchTermLower)) {
          newExpandedPaths.push(newPath)
        } else if (typeof value === 'object' && value !== null) {
          searchInObject(value, newPath)
        }
      }
    }

    searchInObject(ontologyData, 'root')
    setExpandedPaths(newExpandedPaths)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Ontology Explorer</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="relative bg-brown-500 p-4 rounded-lg flex justify-center"> {/* Add background color */}
          <Image
            src={ontologyImage} // Use the imported image
            alt="Ontology Image"
            width={600}
            height={400}
            className="rounded-lg border-4 border-gray-300 cursor-pointer"
            onClick={() => setIsZoomed(true)}
          />
        </div>
        <Dialog open={isZoomed} onClose={() => setIsZoomed(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-lg p-4">
              <div className="overflow-hidden relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full overflow-auto">
                  <Image
                    src={ontologyImage} // Use the imported image
                    alt="Ontology Image"
                    width={500}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <ReactJson
          src={ontologyData}
          theme="twilight"
          collapsed={0}
          displayDataTypes={true}
          name={null}
          enableClipboard={true}
          shouldCollapse={(field) => !expandedPaths.includes(field.namespace.join('.'))}
        />
      </div>
    </div>
  )
}