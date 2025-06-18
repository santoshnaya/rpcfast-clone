'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-black">RPC</div>
          <div className="bg-black text-white px-2 py-1 text-sm font-semibold rounded">FAST</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Blogs</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-gray-700 hover:text-black transition-colors border border-gray-300 px-4 py-2 rounded-lg">
            Log in
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Try it for free
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                The <span className="bg-orange-200 px-2 rounded">fastest</span>{' '}
                <span className="bg-purple-200 px-2 rounded">geo-distributed</span>{' '}
                <span className="bg-purple-200 px-2 rounded">high available block chain nodes</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl">
                Get all the advantages of blockchain API on your own secure environment
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold">
                Contact Us
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg">
                Quick chat on Telegram
              </button>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Node Illustration */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-gray-300">
                  <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                      <div className="w-6 h-6 bg-purple-400 rounded"></div>
                      <div className="w-6 h-6 bg-purple-500 rounded"></div>
                      <div className="w-6 h-6 bg-purple-400 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded transform rotate-45"></div>
                  <div className="absolute top-12 -left-6 w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div className="absolute -bottom-6 left-12 w-6 h-6 bg-blue-400 rounded transform rotate-12"></div>
                  <div className="absolute top-20 -right-8 w-3 h-12 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* Orbital ring */}
                <div className="absolute -inset-12 border-2 border-gray-200 rounded-full"></div>
                
                {/* Connection points */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 right-8">
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
} 