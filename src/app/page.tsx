import React from "react";
import { motion } from "motion/react";

import styles from "./css/page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShaderGradient from "@/components/ShaderGradient";
import Typewriter from "@/components/Typewriter";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>

      {/* @ts-expect-error typescript tweaking rn */}
      <CustomCursor stiffness={1000} damping={25}/>

      {/* Hero section */}
      <section id={styles.hero}>
        <ShaderGradient
          colors={['#f7cbd4', '#ffffff', '#c4e9dc']}
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
              delay={2100}
            >her </Typewriter>

            <Typewriter 
              className={styles.h2}
              delay={2300}
            >future </Typewriter>
          </div>

          <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
                <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
            </defs>
            <g className={styles.wave1}>
                <use href="#wave-path" x="50" y="3"/>
            </g>
            <g className={styles.wave2}>
                <use href="#wave-path" x="50" y="0"/>
            </g>
            <g className={styles.wave3}>
                <use href="#wave-path" x="50" y="9"/>
            </g>
          </svg>
      </section>

      <Footer/>
    </div>
  );
}
