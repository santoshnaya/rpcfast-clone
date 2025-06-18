'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const achievements = [
    {
      title: "8 years of on-hand experience in Kubernetes and blockchain",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200"
    },
    {
      title: "We're handling projects with a load of 1,5 million requests per day",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200"
    },
    {
      title: "Our team provides top-notch services for 99,9% of SLA",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200"
    }
  ]

  const testimonials = [
    {
      name: "Dmytro Haidashenko",
      company: "Shelf Network",
      role: "Infrastructure Maintenance for Vehicle Trading Network",
      content: "In the first stage of their optimization plan alone, Dysnix managed to reduce infrastructure costs by 25%. They provide remarkable response times, which allows them to react to unforeseen situations. This makes them ideal for handling urgent tasks. Roman Cherednik, Velas",
      isActive: true
    },
    {
      name: "Dmytro Haidashenko",
      company: "Shelf Network", 
      role: "Infrastructure Maintenance for Vehicle Trading Network",
      content: "In the first stage of their optimization plan alone, Dysnix managed to reduce infrastructure costs by 25%. They provide remarkable response times, which allows them to react to unforeseen situations. This makes them ideal for handling urgent tasks. Roman Cherednik, Velas",
      isActive: false
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            A bespoke solution created by{' '}
            <span className="underline decoration-2 decoration-gray-900">Dysnix</span>
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white px-6 py-3 rounded-full border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                <span className="text-sm font-semibold">TOP</span>
                <span className="text-xs text-gray-500">B2B COMPANIES</span>
                <div className="bg-black text-white px-2 py-1 text-xs rounded">Clutch</div>
                <span className="text-xs text-gray-500">GLOBAL</span>
                <span className="text-xs">2021</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${achievement.bgColor} ${achievement.borderColor} border-2 rounded-2xl p-6`}
            >
              <p className="text-gray-800 font-medium">{achievement.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="flex gap-8 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex-shrink-0 w-full max-w-2xl ${
                testimonial.isActive ? 'bg-white border-2 border-black' : 'bg-gray-100 border-2 border-gray-200'
              } rounded-2xl p-8`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}, {testimonial.company}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="ml-auto">
                  <div className="text-right">
                    <div className="text-sm font-medium">C See on Clutch</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
} 