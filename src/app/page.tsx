import React from "react";
import { motion } from "motion/react";

import styles from "./css/page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShaderGradient from "@/components/ShaderGradient";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>


      {/* Hero section */}
      <section id={styles.hero}>
        <ShaderGradient
          colors={['#5606ff', '#fe8989', '#000000']}
          noiseStrength={0.5}
          noiseDensity={0.2}
          animate={true}
          shape="plane"
          speed={0.0025}
          />

          <Typewriter className={styles.h1}>CodeHers</Typewriter>
          <div>
            <Typewriter 
              className={styles.h2}
              delay={1000}
            >Empowering </Typewriter>

            <Typewriter 
              className={`${styles.h2} ${styles.i}`}
              delay={2000}
            >her </Typewriter>

            <Typewriter 
              className={styles.h2}
              delay={2200}
            >future </Typewriter>
          </div>
      </section>

      <Footer/>
    </div>
  );
}
