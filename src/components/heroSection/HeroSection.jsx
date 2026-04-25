import React from 'react'
import './heroSection.css'
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
   <section className="hero">
      <div className="hero-container">

        {/* LEFT TEXT */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="tag">Customer Support Made Easy</p>

          <h1>
            Stop replying to customers all day.
          </h1>

          <p className="subtext">
            Voicely handles your emails, live chat, and customer calls—
            so you can focus on growing your business.
          </p>

          <div className="hero-buttons">
            <motion.button 
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <motion.button 
              className="secondary"
              whileHover={{ scale: 1.05 }}
            >
              Book a Free Call
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          {/* Floating Cards */}
          <motion.div 
            className="mock-card"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>💬 New Message</p>
            <span>"Hi, I need help with my order"</span>
          </motion.div>

          <motion.div 
            className="mock-card small"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>✅ Replied instantly</p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
