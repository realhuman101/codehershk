import React from "react";

import styles from "./css/page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientHero from "@/components/GradientHero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>

      {/* Hero section */}
      <div id={styles.hero}>
        <GradientHero/>
      </div>

      <Footer/>
    </div>
  );
}
