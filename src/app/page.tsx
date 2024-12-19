"use client"

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import styles from "./css/page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShaderGradient from "@/components/ShaderGradient";
import Typewriter from "@/components/Typewriter";
import CustomCursor from "@/components/CustomCursor";
import HalftoneGradient from "@/components/HalftoneGradient";

export default function Home() {
  const [ windowSize, setWindowSize ] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function getSize() {
      setWindowSize({
        x: window.innerWidth,
        y: window.innerHeight
      })
    }

    getSize();

    window.addEventListener('resize', getSize)
  }, [])

  return (
    <div className={styles.page}>
      <Navbar/>

      {/* @ts-expect-error typescript tweaking rn */}
      <CustomCursor stiffness={1000} damping={25}/>

      {/* Hero section */}
      <section id={styles.hero}>
        <ShaderGradient
          colors={['#ff5005', '#dbba95', '#d0bce1']}
          noiseStrength={0.6}
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

          <HalftoneGradient className={styles.transition} rows={6} cols={Math.floor(windowSize.x / 12)}/>
      </section>

      <Footer/>
    </div>
  );
}
