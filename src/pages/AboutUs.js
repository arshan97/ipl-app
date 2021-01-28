import { motion } from "framer-motion"
import React from "react"
import { pageAnimation } from "../animation/animate"
import { AboutSection } from "../components/AboutSection"

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <AboutSection />
    </motion.div>
  )
}

export default AboutUs
