'use client'

import { motion } from 'framer-motion'

export default function Blockchains() {
  const topBlockchains = [
    { name: 'Ethereum', icon: '⟨Ξ⟩', color: 'bg-purple-100 border-purple-200' },
    { name: 'BNB Chain', icon: '⟨B⟩', color: 'bg-yellow-100 border-yellow-200' },
    { name: 'Polygon', icon: '⟨◊⟩', color: 'bg-purple-100 border-purple-200' },
    { name: 'Arbitrum', icon: '⟨△⟩', color: 'bg-blue-100 border-blue-200' }
  ]

  const bottomBlockchains = [
    { name: 'Ethereum', icon: '⟨Ξ⟩', color: 'text-purple-600' },
    { name: 'Avalanche', icon: '⟨A⟩', color: 'text-red-600' },
    { name: 'Cardano', icon: '⟨◆⟩', color: 'text-blue-600' },
    { name: 'Velas', icon: '⟨V⟩', color: 'text-blue-600' },
    { name: 'Klaytn', icon: '⟨K⟩', color: 'text-black' },
    { name: 'Tron', icon: '⟨T⟩', color: 'text-red-600' },
    { name: 'Cronos', icon: '⟨C⟩', color: 'text-blue-600' },
    { name: 'Optimism', icon: '⟨O⟩', color: 'text-red-600' },
    { name: 'Fantom', icon: '⟨F⟩', color: 'text-blue-600' }
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Ultra-fast nodes for any blockchain
          </h2>
        </motion.div>

        {/* Top blockchain cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {topBlockchains.map((blockchain, index) => (
            <div
              key={index}
              className={`${blockchain.color} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
            >
              <div className="text-3xl mb-3">{blockchain.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{blockchain.name}</h3>
            </div>
          ))}
        </motion.div>

        {/* Bottom blockchain icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center mb-12"
        >
          {bottomBlockchains.map((blockchain, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-2 mx-auto">
                <span className={`text-lg font-bold ${blockchain.color}`}>
                  {blockchain.icon}
                </span>
              </div>
              <p className="text-sm text-gray-600">{blockchain.name}</p>
            </div>
          ))}
        </motion.div>

        {/* Support message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            We support up to 85 blockchains. Please contact us if your required chains are missing in this list
          </p>
        </motion.div>
      </div>
    </section>
  )
} 