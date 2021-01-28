import React from "react"
// import homeImage from "../images/banner3.png"
import { About, Description, Hide, Image } from "../styles"
import { motion } from "framer-motion"
import { fade, photoAnim, titleAnim } from "../animation/animate"
import Wave from "./Wave"
import { Link } from "react-router-dom"

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Aisa Mauka </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>
              Aur Kaha <span>Milega.</span>
            </motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Ek Desh! Ek Junu! <br /> Dil Se Dil Wosh Sabka Ud Jyaega
        </motion.p>
        <Link to="/teams">
          <motion.button variants={fade}>Find Your Team</motion.button>
        </Link>
      </Description>

      <Image>
        <motion.img variants={photoAnim} src={"/images/banner3.png"} alt="Home" />
      </Image>

      <Wave />
    </About>
  )
}
