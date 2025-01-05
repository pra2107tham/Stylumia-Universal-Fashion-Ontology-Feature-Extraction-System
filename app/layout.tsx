import './globals.css'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Fashion AI - Universal Fashion Ontology & Feature Extraction',
  description: 'Revolutionizing Fashion Understanding with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${poppins.className} flex flex-col h-full bg-gray-50`}>
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-indigo-600">Fashion AI</span>
                </Link>
              </div>
              <div className="flex items-center">
                <Link href="/ontology" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Ontology Explorer</Link>
                <Link href="/search" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Search & Filter</Link>
                <Link href="/recommendations" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Recommendations</Link>
                <Link href="/trends" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100">Trend Analysis</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center">&copy; 2023 Fashion AI. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

