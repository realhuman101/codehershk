"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2
      }
    }
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: [0, 1, 1],
      opacity: 1,
      transition: {
        pathLength: { 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.6, 1]
        },
        opacity: { 
          duration: 0.5,
          ease: "easeIn",
        }
      }
    }
  };

  const gradientVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      pathLength: [0, 1, 1],
      opacity: [0, 1, 1],
      scale: 1,
      transition: {
        pathLength: { 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.6, 1]
        },
        opacity: { 
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.6, 1]
        },
        scale: { 
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1]
        }
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      animate={isLoading ? "visible" : "exit"}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
		overflow: "visible"
	}}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1]
        }}
        style={{
			position: "relative",
			width: 200,
			height: 200
        }}
		>
        <motion.div
          animate={{
			  boxShadow: [
				  "0 0 0 0 rgba(233, 137, 131, 0)",
				  "0 0 0 20px rgba(233, 137, 131, 0.1)",
				  "0 0 0 40px rgba(233, 137, 131, 0)",
				]
			}}
			transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
		}}
		style={{
			position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
			overflow: "visible"
		}}
        />
        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 174.16 247.42"
          initial="hidden"
          animate="visible"
		  style={{ overflow: "visible" }}
        >
          <defs>
            <radialGradient 
              id="loading-gradient" 
              cx="50%" 
              cy="50%" 
              r="70%" 
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#e98983">
                <animate
                  attributeName="stop-color"
                  values="#e98983;#d54388;#e98983"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="1" stopColor="#d54388">
                <animate
                  attributeName="stop-color"
                  values="#d54388;#e98983;#d54388"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </radialGradient>
            <mask id="fillMask">
              <circle cx="87.08" cy="123.71" r="0" fill="white">
                <animate
                  attributeName="r"
                  values="0;200"
                  dur="1s"
                  begin="2s"
                  fill="freeze"
                />
              </circle>
            </mask>
          </defs>

          <motion.path
            d="M94.78,198.27c-18.12-.11-35.91-4.95-51.58-14.05C20.68,171.35,6.3,150.16,1.58,122.91-4.02,90.49,5.57,53.11,25.48,30.03,42.83,9.76,65.68-.64,92.06.03c33.07.78,61.41,18.44,74.82,35.64,3.87,4.96,2.98,12.11-1.98,15.98-4.96,3.87-12.11,2.98-15.98-1.98h0c-10.13-12.92-33.03-26.3-57.42-26.87-19.32-.47-35.82,6.98-48.78,22.06-15.49,18.04-23.17,48.57-18.73,74.31,2.45,14.15,9.71,33.54,30.4,45.4,20.11,11.5,42.58,14.14,63.16,7.48,16.18-5.22,29.15-15.66,34.72-27.9,2.44-5.79,9.12-8.51,14.91-6.06,5.79,2.44,8.51,9.12,6.06,14.91-.08.19-.16.38-.25.56-8.16,17.99-26.28,33-48.44,40.16-9.63,3.06-19.68,4.6-29.79,4.56Z"
            variants={pathVariants}
            stroke="#020202"
            strokeWidth="3"
            fill="none"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))"
            }}
          />

          <motion.path
            d="M135.58,106.63c0-19.68-13.16-40.85-42.04-40.85-25.91,0-40.77,13.98-40.77,38.35,0,22.14,14.52,35.57,31.62,39.89-.45,1.14-.71,2.34-.76,3.56l-.88,88.33c-.06,6.29,4.99,11.44,11.28,11.5h.12c6.24,0,11.32-5.04,11.38-11.28l.88-88.33c-.04-1.23-.27-2.45-.69-3.61,16.11-4.75,29.86-20.94,29.86-37.56ZM96.52,122.93c-3.51,0-20.98-.91-20.98-18.8,0-10.13,2.87-15.57,18-15.57,16.77,0,19.27,11.33,19.27,18.07,0,7.72-9.71,16.3-16.3,16.3h0Z"
            variants={gradientVariants}
            stroke="url(#loading-gradient)"
            strokeWidth="2"
            fill="url(#loading-gradient)"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))",
              mask: "url(#fillMask)"
            }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};