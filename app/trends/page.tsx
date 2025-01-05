'use client'

import { useState } from 'react'
import { Bar, Line, Radar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { categories } from '../productTypes'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Enhanced trend data based on new categories
const trendData = {
  popularCategories: {
    labels: categories.map(cat => cat.name),
    datasets: [
      {
        label: 'Popularity Score',
        data: categories.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(99, 102, 241, 0.6)',
      },
    ],
  },
  emergingFeatures: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sustainable Materials',
        data: [10, 15, 20, 25, 35, 45, 50, 58, 65, 72, 80, 85],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Athleisure',
        data: [20, 25, 30, 40, 45, 55, 60, 68, 75, 80, 85, 90],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Smart Textiles',
        data: [5, 8, 12, 18, 25, 35, 42, 50, 60, 68, 75, 82],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.5)',
        tension: 0.1,
      },
      {
        label: 'Customizable Products',
        data: [2, 5, 8, 12, 18, 25, 32, 40, 50, 62, 75, 85],
        borderColor: 'rgb(236, 72, 153)',
        backgroundColor: 'rgba(236, 72, 153, 0.5)',
        tension: 0.1,
      },
    ],
  },
  seasonalTrends: {
    labels: ['Spring', 'Summer', 'Autumn', 'Winter'],
    datasets: [
      {
        label: 'Pastel Colors',
        data: [80, 60, 30, 20],
        backgroundColor: 'rgba(147, 197, 253, 0.5)',
        borderColor: 'rgb(147, 197, 253)',
        pointBackgroundColor: 'rgb(147, 197, 253)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(147, 197, 253)',
      },
      {
        label: 'Earth Tones',
        data: [40, 30, 85, 70],
        backgroundColor: 'rgba(180, 83, 9, 0.5)',
        borderColor: 'rgb(180, 83, 9)',
        pointBackgroundColor: 'rgb(180, 83, 9)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(180, 83, 9)',
      },
      {
        label: 'Metallic Finishes',
        data: [20, 40, 60, 85],
        backgroundColor: 'rgba(212, 212, 216, 0.5)',
        borderColor: 'rgb(212, 212, 216)',
        pointBackgroundColor: 'rgb(212, 212, 216)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(212, 212, 216)',
      },
    ],
  },
  sustainabilityImpact: {
    labels: ['Recycled Materials', 'Organic Fabrics', 'Water Conservation', 'Ethical Labor', 'Carbon Footprint Reduction'],
    datasets: [
      {
        data: [30, 25, 15, 20, 10],
        backgroundColor: [
          'rgba(99, 102, 241, 0.6)',
          'rgba(16, 185, 129, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(249, 115, 22, 0.6)',
          'rgba(236, 72, 153, 0.6)',
        ],
        borderColor: [
          'rgb(99, 102, 241)',
          'rgb(16, 185, 129)',
          'rgb(59, 130, 246)',
          'rgb(249, 115, 22)',
          'rgb(236, 72, 153)',
        ],
      },
    ],
  },
}

export default function TrendAnalysis() {
  const [timeRange, setTimeRange] = useState('lastYear')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Trend Analysis</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Time Range</h2>
        <select
          className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="lastMonth">Last Month</option>
          <option value="lastQuarter">Last Quarter</option>
          <option value="lastYear">Last Year</option>
          <option value="last5Years">Last 5 Years</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Most Popular Categories</h2>
          <Bar 
            data={trendData.popularCategories}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Category Popularity',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            }}
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Emerging Features</h2>
          <Line 
            data={trendData.emergingFeatures}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Emerging Fashion Features',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Seasonal Color Trends</h2>
          <Radar 
            data={trendData.seasonalTrends}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Seasonal Color Popularity',
                },
              },
              scales: {
                r: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            }}
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sustainability Impact</h2>
          <Doughnut 
            data={trendData.sustainabilityImpact}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'Sustainability Initiatives',
                },
              },
            }}
          />
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Trend Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
            <p className="font-bold">Sustainable Materials Revolution</p>
            <p>Sustainable materials have seen a dramatic 75% increase in adoption across all categories, particularly in T-Shirts and Jeans.</p>
          </div>
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            <p className="font-bold">Smart Textiles Emergence</p>
            <p>Smart textiles and wearable tech integration in Watches and Sneakers have surged by 83%, indicating a growing consumer interest in tech-enhanced fashion.</p>
          </div>
          <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4">
            <p className="font-bold">Customization Trend</p>
            <p>Customizable products, especially in Jewelry and Bathroom Vanities, have experienced a significant 77% growth, reflecting a shift towards personalized fashion and home decor.</p>
          </div>
          <div className="bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-4">
            <p className="font-bold">Fusion Fashion</p>
            <p>There's a 65% increase in products that blend traditional and modern styles, particularly evident in Kurtis and Sarees categories.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Predictive Trends</h2>
        <p className="text-gray-700 mb-4">Based on our advanced AI analysis, we predict the following trends to gain significant traction in the coming seasons:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Biofabricated materials will see a 200% increase in adoption within luxury fashion brands, particularly in Watches and Jewelry.</li>
          <li>Virtual try-on experiences for Clothing and Accessories will grow by 150%, driven by augmented reality technologies.</li>
          <li>Hyper-personalization through AI and 3D printing will lead to a 90% increase in made-to-measure fashion items across all categories.</li>
          <li>Climate-adaptive clothing will emerge as a new category, growing by 120% in regions affected by extreme weather conditions.</li>
          <li>Circular fashion models, including rental and resale platforms, will expand by 180% across all product categories, reshaping traditional retail structures.</li>
        </ul>
      </div>
    </div>
  )
}

