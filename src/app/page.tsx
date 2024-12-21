"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import "./css/page.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShaderGradient from "@/components/ShaderGradient";
import Typewriter from "@/components/Typewriter";
import CustomCursor from "@/components/CustomCursor";
import HalftoneGradient from "@/components/HalftoneGradient";
import MiniNav from "@/components/MiniNav";

export default function Home() {
  const [ windowSize, setWindowSize ] = useState({ x: 0, y: 0 });
  const [ miniNavScroll, setMiniNavScroll ] = useState(false)
  const miniNavRef = useRef(null)

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
    <div className='page'>
      <Navbar/>

      {/* @ts-expect-error typescript tweaking rn */}
      <CustomCursor stiffness={1000} damping={25}/>

      <ShaderGradient
        // colors={['#ff5005', '#dbba95', '#d0bce1']}
        colors={['#ffa1e4', '#d9daff', '#d9fff0']}
        noiseStrength={0.6}
        noiseDensity={0.2}
        animate={true}
        shape="plane"
        speed={0.0025}
        style={{ 
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'block'
        }}
        />
        
      {/* Hero section */}
      <section id='hero'>

          <Typewriter className='h1'>CodeHers</Typewriter>
          <div>
            <Typewriter 
              className='h2'
              delay={1000}
            >Empowering </Typewriter>

            <motion.div
              animate={{ skewX: "-15deg" }}
              transition={{delay: 3, ease: 'easeInOut' }}
            >
              <Typewriter 
              className={`h2 i`}
              delay={2100}
              >her </Typewriter>
            </motion.div>

            <Typewriter 
              className='h2'
              delay={2300}
            >future </Typewriter>
          </div>

          {/* <HalftoneGradient className={styles.transition} rows={windowSize.y < 400 ? (windowSize.y < 350 ? 4 : 5) : 6} cols={Math.floor((windowSize.x / 10))+1}/> */}
      
          <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
                <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
            </defs>
            <g className='wave1'>
                <use href="#wave-path" x="50" y="3"/>
            </g>
            <g className='wave2'>
                <use href="#wave-path" x="50" y="0"/>
            </g>
            <g className='wave3'>
                <use href="#wave-path" x="50" y="9"/>
            </g>
          </svg>
      </section>

        <MiniNav items={[
          { text: 'About', sectionId: 'about' },
        ]} 
        />

      <section id='about'>
        <motion.h1
          initial={{ translateY: '-10px' }}
          animate={{ translateY: '0' }}
          viewport={{ once: true }}
        >ABOUT</motion.h1>
        <h3>Short description</h3>
        <div>

        </div>
      </section>

      <Footer/>
    </div>
  );
}
