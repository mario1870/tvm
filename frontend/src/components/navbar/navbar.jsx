
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useAnimate, useAnimationControls } from "framer-motion"
import { MdClose } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import AnimatedLogo from "./animatedLogo"
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const navbarData = [
  {link: "/aktive", titel: "Aktive"},
  {link: "/jugend", titel: "Jugend"},
  {link: "/yoga", titel: "Yoga"},
  {link: "/Gymnastik", titel: "Gymnastik"},
  {link: "/Kindertunen", titel: "Kindertunen"},
  {link: "/Sportheim", titel: "Sportheim"},
  {link: "/Veranstaltungen", titel: "Veranstaltungen"},
  {link: "/Sponsoren", titel: "Sponsoren"},
  {link: "/Kontakt", titel: "Kontakt"},
]


const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)
    const handleToggleHamburger = () => {
      setHamburger(!hamburger);
  
      // deaktiviert Scrollfunktion wenn Sidebar geöffnet ist
      document.body.style.overflow = hamburger ? 'unset' : 'hidden';
    };
    
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

    const HintergrundAnimationNavbarOnScroll = {
      normal: { backgroundColor: "rgba(52, 152, 219, 1)" },
      clicked: { backgroundColor: "rgba(0, 0, 0, 0.5)" }
    };

    const link_tailwind = "w-full h-10 md:px-1 xl:px-2 my-1.5 text-white md:text-base xl:text-xl font-sans font-semibold text-center"

    const [hovered, setHovered] = useState(false)

    const animatedNavbarUnderline = {
      hidden: {
        pathLength: 0,
      },
      visible: {
        pathLength: 1,
        transition: {
          delay: 0.2
        }
      },
    };

    return(
      <>
        <motion.nav className="fixed w-full bg-blue-400 z-50 flex justify-between px-4 md:px-8 items-center py-2 h-20 drop-shadow-lg" initial="normal" animate={clicked ? "clicked" : "normal"} variants={HintergrundAnimationNavbarOnScroll} ransition={{ duration: 0.6 }}>
          <motion.div className="z-20">
            <AnimatedLogo />
          </motion.div>

          <div className="flex-row hidden lg:flex">
            {navbarData.map((data, index) => (
              <span className='w-full flex justify-center items-center flex-col pt-4'>
                  <motion.span><Link to={data.link} onMouseEnter={() => {setHovered(data.titel)}} onMouseLeave={() => {setHovered(false)}} className={link_tailwind}>{data.titel}</Link></motion.span>    
                  <svg className='' width="100%" height="16" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path variants={animatedNavbarUnderline} initial="hidden" animate={hovered === data.titel ? "visible": "hidden"}  d="M0 2C34.3704 2 68.7407 2 103.111 2C114.481 2 125.852 2 137.222 2C139.593 2 141.963 2 144.333 2C148.219 2 136.669 3.32019 132.889 4.22222C104.373 11.0272 76.1103 15.889 46.9444 19.7778C38.7799 20.8664 30.456 22.4688 22.2222 23C13.3405 23.573 39.9397 21.2713 48.7778 20.2222C67.9708 17.9441 87.7366 16.8651 107.056 18.5556C109.817 18.7972 124.305 22.3904 126 19" stroke="white" stroke-width="3" stroke-linecap="round"/>
                  </svg>           
              </span> 
            ))}   
          </div>  

          <div className="block lg:hidden">
            {hamburger ? (
              <MdClose onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10" color="white" />
            ) : (
              <RxHamburgerMenu onClick={handleToggleHamburger} className="cursor-pointer h-10 w-10 z-50" color='white'/>
            )}
          </div>

        </motion.nav>

        {hamburger && (
          <motion.div className="z-30 right-0 fixed top-0 w-full h-full block lg:hidden">
            <Sidebar togggle={hamburger} setToggle={handleToggleHamburger} />
          </motion.div>
        )}
      </>

    )
}

export default Navbar