'use client'

import { motion } from 'framer-motion'

export default function FAQ() {
  const faqs = [
    {
      question: "What are blockchain nodes?",
      answer: "Nodes are the \"knots\" of the blockchain systems interconnected to create the distributed network and secure it. One node can be launched on one separate device or be a part of the software-hardware complex where the node is allocated alongside others. There are a lot of types of nodes: Web3 industry has light nodes, archival nodes, mining nodes, masternodes, and others. Each has its own specialization in transferring information through the network."
    },
    {
      question: "What are blockchain nodes?",
      answer: "Nodes are the \"knots\" of the blockchain systems interconnected to create the distributed network and secure it. One node can be launched on one separate device or be a part of the software-hardware complex where the node is allocated alongside others. There are a lot of types of nodes: Web3 industry has light nodes, archival nodes, mining nodes, masternodes, and others. Each has its own specialization in transferring information through the network."
    },
    {
      question: "What are blockchain nodes?",
      answer: "Nodes are the \"knots\" of the blockchain systems interconnected to create the distributed network and secure it. One node can be launched on one separate device or be a part of the software-hardware complex where the node is allocated alongside others. There are a lot of types of nodes: Web3 industry has light nodes, archival nodes, mining nodes, masternodes, and others. Each has its own specialization in transferring information through the network."
    },
    {
      question: "What are blockchain nodes?",
      answer: "Nodes are the \"knots\" of the blockchain systems interconnected to create the distributed network and secure it. One node can be launched on one separate device or be a part of the software-hardware complex where the node is allocated alongside others. There are a lot of types of nodes: Web3 industry has light nodes, archival nodes, mining nodes, masternodes, and others. Each has its own specialization in transferring information through the network."
    },
    {
      question: "What are blockchain nodes?",
      answer: "Nodes are the \"knots\" of the blockchain systems interconnected to create the distributed network and secure it. One node can be launched on one separate device or be a part of the software-hardware complex where the node is allocated alongside others. There are a lot of types of nodes: Web3 industry has light nodes, archival nodes, mining nodes, masternodes, and others. Each has its own specialization in transferring information through the network."
    },
    {
      question: "What are blockchain nodes?",
      answer: "Nodes are the \"knots\" of the blockchain systems interconnected to create the distributed network and secure it. One node can be launched on one separate device or be a part of the software-hardware complex where the node is allocated alongside others. There are a lot of types of nodes: Web3 industry has light nodes, archival nodes, mining nodes, masternodes, and others. Each has its own specialization in transferring information through the network."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions: Basic Knowledge to Remind
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 