'use client'

import { motion } from 'framer-motion'

export default function NodeServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Boost your Web3 project with our
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            node infrastructure solutions
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dedicated Nodes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-8"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center">
                  {/* Node illustration */}
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-blue-600 rounded-full border-4 border-blue-200"></div>
                    <div className="absolute top-2 left-2 right-2 bottom-2 bg-black rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-6 bg-gray-300 rounded-full transform rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Nodes</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For middle-sized projects that demand dedicated resources for peak performance and scalability.
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                  Learn more
                </button>
              </div>
            </div>
          </motion.div>

          {/* Dedicated Node Cluster */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-8"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center">
                  {/* Cluster illustration */}
                  <div className="relative w-16 h-16">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-6 h-6 bg-purple-400 rounded"></div>
                      <div className="w-6 h-6 bg-purple-500 rounded"></div>
                      <div className="w-6 h-6 bg-blue-400 rounded"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Node Cluster</h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For high volume operations with the lowest latency, customized, global self-hosted infrastructure
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                  Learn more
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 