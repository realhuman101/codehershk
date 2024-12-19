"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.css"; 

interface Props {
	stiffness?: number;
	damping?: number;
	width?: number;
	height?: number;
}

const CustomCursor: React.FC = ({ stiffness=300, damping=20, width=50, height=50 }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className={styles.customCursor}
      animate={{
        x: mousePosition.x - width/2,
        y: mousePosition.y - height/2,
      }}
      transition={{
        type: "spring",
        stiffness: stiffness, 
        damping: damping,
      }}
    />
  );
};

export default CustomCursor;
