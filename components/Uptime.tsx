'use client'

import { motion } from 'framer-motion'

export default function Uptime() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-orange-500 leading-none">
            99,9%
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mt-4">
            uptime
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Uninterrupted availability for optimal user experience and exceptional customer support
          </p>
        </motion.div>
      </div>
    </section>
  )
} 