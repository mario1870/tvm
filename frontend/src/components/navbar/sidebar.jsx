import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {Divider} from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Sidebar = ({ toggle, setToggle }) => {

    const icon = {
        hidden: {
          opacity: 0,
          y: "-50"
        },
        visible: {
          opacity: 1,
          y:0
        }
      }

    const link_tailwind = "w-full px-10 my-1.5 text-white text-4xl font-sans font-medium"

    const handleSidebarToggle = () => {
      // Hier wird setToggle aufgerufen, um den State im Parent zu aktualisieren
      setToggle((prevToggle) => !prevToggle);
    };
    
    return(
        <motion.div className="w-full min-h-full z-30 flex flex-col right-0 pt-24 fixed bg-blue-900 justify-between">
            <div className="flex flex-col">
                <Link to="/aktive" onClick={handleSidebarToggle} className={link_tailwind}><span>Aktive</span></Link>
                <Link to="/jugend" onClick={handleSidebarToggle} className={link_tailwind}><span>Jugend</span></Link>              
                <Link to="/yoga" onClick={handleSidebarToggle} className={link_tailwind}><span>Yoga</span></Link>
                <Link to="/Gymnastik" onClick={handleSidebarToggle} className={link_tailwind}><span>Gymnastik</span></Link>
                <Link to="/Kindertunen" onClick={handleSidebarToggle} className={link_tailwind}><span>Kindertunen</span></Link>              
                <Link to="/Sportheim" onClick={handleSidebarToggle} className={link_tailwind}><span>Sportheim</span></Link>
                <Link to="/Veranstaltungen" onClick={handleSidebarToggle} className={link_tailwind}><span>Veranstaltungen</span></Link>
                <Link to="/Sponsoren" onClick={handleSidebarToggle} className={link_tailwind}><span>Sponsoren</span></Link>
                <Link to="/Kontakt" onClick={handleSidebarToggle} className={link_tailwind}><span>Kontakt</span></Link>        
            </div>       
            <div className="flex w-full justify-around px-20 py-6">
                <a href="https://www.instagram.com/tvmelchingen1912/"><FaInstagram color="white" size={40} /></a>
                <a href="https://www.facebook.com/tvmelchingen/"><FaFacebookF color="white" size={40} /></a>
                <a href="https://www.youtube.com/@tvmelchingen3274"><FaYoutube color="white" size={40} /></a>
            </div>
        </motion.div>
    )
}

export default Sidebar