import React from "react";

import styles from "./css/page.module.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>

      {/* Hero section */}
      <section id={styles.hero}>
        <h1>CodeHers</h1>
        <h2>Empowering <i>her</i> future.</h2>
      </section>

      <Footer/>
    </div>
  );
}
