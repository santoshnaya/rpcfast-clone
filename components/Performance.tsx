'use client'

import { motion } from 'framer-motion'

export default function Performance() {
  const features = [
    {
      title: "5x Cost Reduction",
      description: "Compared to the 3rd party providers. Pay only for the node. No scaling bills",
      bgColor: "bg-purple-100",
      tagColor: "bg-purple-500",
      borderColor: "border-purple-200"
    },
    {
      title: "Ultra Speed",
      description: "RPC Response Time Under 4 ms",
      bgColor: "bg-orange-100",
      tagColor: "bg-orange-500",
      borderColor: "border-orange-200"
    },
    {
      title: "100% Healthy Nodes",
      description: "Auto-recovery and traffic balancing for healthy nodes",
      bgColor: "bg-purple-100",
      tagColor: "bg-purple-500",
      borderColor: "border-purple-200"
    },
    {
      title: "AI-based Auto-scaling",
      description: "Our AI model predicts traffic and scales infrastructure automatically",
      bgColor: "bg-gray-100",
      tagColor: "bg-black",
      borderColor: "border-gray-200"
    },
    {
      title: "Smart Caching",
      description: "Peak performance and resource optimization",
      bgColor: "bg-orange-100",
      tagColor: "bg-orange-500",
      borderColor: "border-orange-200"
    },
    {
      title: "5x Cost Reduction",
      description: "Software-defined perimeter Firewall Security policy Auto-updated software",
      bgColor: "bg-purple-100",
      tagColor: "bg-purple-500",
      borderColor: "border-purple-200"
    }
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why our RPC nodes outperform
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            traditional blockchain API providers
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${feature.bgColor} ${feature.borderColor} border-2 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start space-x-4">
                <div className={`${feature.tagColor} text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap`}>
                  {feature.title.split(' ')[0]} {feature.title.split(' ')[1]}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title.split(' ').slice(2).join(' ') || feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 