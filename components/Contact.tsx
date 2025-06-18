'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-black rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Let&apos;s speak as developers to developers on how you can create your own blockchain infrastructure and significantly reduce costs
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold">
                  Contact Us
                </button>
                <button className="border border-gray-300 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg">
                  Quick chat on Telegram
                </button>
              </div>
            </motion.div>

            {/* Right Content - Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto lg:mx-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Daniel Yavorovych</h3>
                <p className="text-gray-300">Co-Founder & CTO at RPC Fast</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 