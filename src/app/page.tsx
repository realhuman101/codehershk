import React from "react";

import styles from "./css/page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ShaderGradient from "@/components/ShaderGradient";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>

      {/* Hero section */}
      {/* <section id={styles.hero}>
        <h1>CodeHers</h1>
        <h2>Empowering <i>her</i> future.</h2>
      </section> */}

        <ShaderGradient
          colors={['#5606ff', '#fe8989', '#000000']}
          noiseStrength={0.5}
          noiseDensity={0.2}
          animate={true}
          shape="plane"
          speed={0.0025}
        />

        <p>text here</p>
      <Footer/>
    </div>
  );
}
