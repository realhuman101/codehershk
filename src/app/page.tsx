"use client"

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

import "./css/page.css";

import Loading from "@/components/Loading";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShaderGradient from "@/components/ShaderGradient";
import Typewriter from "@/components/Typewriter";
import CustomCursor from "@/components/CustomCursor";
import MiniNav from "@/components/MiniNav";
import ParallaxButton from "@/components/ParallaxButton";
import Blob from "@/components/Blob";

import AnimatedText from "@/components/AnimatedText";

import pictures from "@/imgs/event/pictures";

export default function Home() {
  const [ windowSize, setWindowSize ] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const learnMoreButton = useRef<HTMLButtonElement>(null);
  const heroRef = useRef<HTMLDivElement>(null) 
  const aboutTitleRef = useRef(null)

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: heroRef,
    offset: ['end end', 'end start']
  });

  const heroScale = useTransform(
    heroScrollProgress,
    [0, 1],
    [1, 0.05]
  );

  const aboutTitleTransforms = {
    fontSize: useTransform(aboutScrollProgress, [0, 1], ['25vw', '5vw']),
    position: useTransform(aboutScrollProgress, (pos) => {
      return pos === 1 ? 'fixed' : 'relative'
    })
  }

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
      {/* <Loading/> */}

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
        speed={0.00025}
        style={{ 
          position: 'fixed',
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
          <motion.div ref={heroRef} style={{ scale: heroScale, display: 'flex', flexDirection: 'column' }}>
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

            <motion.button style={{ 
              border: 'white 3px solid',
              backgroundColor: 'transparent',
              fontWeight: '300',
              marginTop: '5px'
            }}

            // onMouseOver={()=>{if (learnMoreButton) {learnMoreButton.current.style.backgroundColor = 'white';learnMoreButton.current.style.color = '#ff7895'}}}
            // onMouseLeave={()=>{if (learnMoreButton) {learnMoreButton.current.style.backgroundColor = 'transparent';learnMoreButton.current.style.color = 'white'}}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2500 }}
            ref={learnMoreButton}
            >Learn More</motion.button>
          </motion.div>

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

      <div id="contentWrap">
        <section id="about">
            <motion.h1 ref={aboutTitleRef} style={{ fontSize: aboutTitleTransforms.fontSize, position: aboutTitleTransforms.position, zIndex: 2, top: 0, margin: '0 auto' }}>ABOUT</motion.h1>
        </section>
        
        <MiniNav items={[
          { text: 'About', sectionId: 'about' }
        ]} 
          fadeIn={true}
          fixedPlace={false}
        />
      </div>

      <div style={{ height: '500px', padding: '1000px', width: '100vw' }}/>

      <Footer/>
    </div>
  );
}
