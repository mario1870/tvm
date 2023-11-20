import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useAnimate, useAnimationControls } from "framer-motion"
import { MdClose } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import AnimatedLogo from "./animatedLogo"
import Sidebar from "./sidebar";

const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)

    const icon = {
      hidden: {
        x: '100%',
      },
      visible: {
        x:0,
      }
    }

    useEffect(() => {
      // Füge ein Event Listener hinzu, um den Overflow zu kontrollieren, wenn das Seitenmenü geöffnet ist
      if (hamburger) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    
      // Aufräumen beim Komponentenabbau
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [hamburger]);
    
    const [clicked, setClicked] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      setClicked(() => currentPosition < 50);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const backgroundVariants = {
      normal: { backgroundColor: "rgba(52, 152, 219, 1)" }, // Normaler Zustand mit nicht-transparentem Blau
      clicked: { backgroundColor: "rgba(52, 152, 219, 0)" } // Transparenter Zustand, wenn clicked true ist
    };

    return(
      <>
        <motion.nav className="fixed w-full bg-blue-400 z-50 flex justify-between px-4 md:px-8 items-center py-2 h-20 drop-shadow-lg" initial="normal" animate={clicked ? "clicked" : "normal"} variants={backgroundVariants} ransition={{ duration: 0.6 }}>
          <motion.div className="z-20">
            <AnimatedLogo />
          </motion.div>
          <div>
            {hamburger ? (
              <MdClose onClick={() => {setHamburger(!hamburger)}} className="cursor-pointer h-10 w-10" />
            ) : (
              <RxHamburgerMenu onClick={() => {setHamburger(!hamburger)}} className="cursor-pointer h-10 w-10 z-50" />
            )}
          </div>
        </motion.nav>

        {hamburger && (
          <motion.div className="z-40 fixed top-20 left-0 w-full h-full" animate={hamburger ? 'visible' : 'hidden'} variants={icon} initial="hidden" transition={{duration: 0.6}}>
            <Sidebar />
          </motion.div>
        )}
      </>

    )
}

export default Navbar