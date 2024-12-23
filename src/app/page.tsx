"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import "./css/page.css";

import Loading from "@/components/Loading";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShaderGradient from "@/components/ShaderGradient";
import Typewriter from "@/components/Typewriter";
import CustomCursor from "@/components/CustomCursor";
import MiniNav from "@/components/MiniNav";
import ParallaxButton from "@/components/ParallaxButton";

import AnimatedText from "@/components/AnimatedText";

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
    <div className='page'>
      <Loading/>

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

        <br style={{ height: '15px' }} />

        <MiniNav items={[
          { text: 'About', sectionId: 'about' },
          { text: 'Events', sectionId: 'events' },
          { text: 'Partners', sectionId: 'partners' }
        ]} 
          fadeIn={true}
        />

      <section id='about'>
        <AnimatedText className={'mainTitle'} type={'slideDown'} config={{ duration: 0.2 }}>About</AnimatedText>
        <AnimatedText type={'wordByWord'}>We are CodeHers - empowering women with a wide range of workshops, competitions, and experiences which they'll never forget.</AnimatedText>
        
        <div className={'mainFeatureBox'}>
          <div>
            <h1>Workshops</h1>
            <p>
              Hosted by professionals
            </p>
            <h1>Competitions</h1>
            <p>
              Compete against your peers!
            </p>
            <h1>Develop</h1>
            <p>
              Develop innovative products
            </p>
          </div>
        </div>
        
        <ParallaxButton className="movingGradient">Learn More</ParallaxButton>
      </section>

      <section id='events' style={{ height: '900px', backgroundColor: '#ff00ff' }}>
      </section>

      <section id='partners' style={{ height: '900px', backgroundColor: '#00ffff' }}>
      </section>

      <Footer/>
    </div>
  );
}
