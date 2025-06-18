'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Shared Nodes",
      description: "For startups and SME projects",
      price: "$0 - $1000",
      features: [
        "Natural latency",
        "Standard security",
        "Limited performance",
        "Costs depend on traffic"
      ],
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    },
    {
      name: "Dedicated Nodes",
      description: "For middle-sized projects",
      price: "From $450",
      subPrice: "*From $1500 for Solana",
      features: [
        "Guaranteed resources",
        "High security",
        "Transaction simulation",
        "24/7 dedicated support",
        "High customization"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Nodes Cluster",
      description: "For large enterprise projects",
      price: "From $2000",
      features: [
        "AI-based autoscaling for better UX and reduced costs",
        "Advanced MEV tools",
        "Multi-regional deployment for optimized response time",
        "High customization",
        "24/7 dedicated support"
      ],
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    }
  ]

  const benefits = [
    "A fixed price for maintenance is included",
    "Scale to infinity while paying for cloud resources only",
    "We know how to cut costs by an average of 40% and optimize the TCO"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pricing is as easy as what SaaS does
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pricing comparison title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find your best-matching service pack
          </h3>
          <p className="text-xl text-gray-600">
            comparing our node services
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${tier.bgColor} ${tier.borderColor} border-2 rounded-2xl p-8 text-center`}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              
              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900 mb-2">{tier.price}</div>
                {tier.subPrice && (
                  <div className="text-sm text-gray-500">{tier.subPrice}</div>
                )}
              </div>

              <div className="space-y-4 text-left">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 