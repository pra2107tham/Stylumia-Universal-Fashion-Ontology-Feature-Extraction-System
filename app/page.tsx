import Link from 'next/link'
import { ArrowRight, Search, Zap, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Universal Fashion Ontology</span>
            <span className="block text-indigo-600">& Feature Extraction System</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Revolutionizing Fashion Understanding with AI: Discover, Analyze, and Predict Fashion Trends Like Never Before
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Search className="h-6 w-6 text-white" />}
              title="Ontology Explorer"
              description="Navigate our comprehensive fashion ontology with ease."
              link="/ontology"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-white" />}
              title="Smart Recommendations"
              description="Get personalized fashion suggestions powered by AI."
              link="/recommendations"
            />
            <FeatureCard
              icon={<TrendingUp className="h-6 w-6 text-white" />}
              title="Trend Analysis"
              description="Stay ahead of the curve with our advanced trend predictions."
              link="/trends"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, link }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500">
              {icon}
            </div>
          </div>
          <div className="ml-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-base text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <Link href={link} className="text-base font-medium text-indigo-700 hover:text-indigo-600 flex items-center">
          Explore <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

