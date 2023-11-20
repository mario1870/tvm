import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {Divider} from "@nextui-org/react";

const Sidebar = () => {
    return(
        <div className="w-80 h-full z-50 bg-blue-300/100 flex flex-col absolute right-0 pt-12">
            <Link to="/aktive" className="w-full flex justify-center my-1 hover:underline-offset-4"><span>Aktive</span></Link>
            <Divider className="my-4" />
            <Link to="/aktive" className="w-full flex justify-center my-1"><span>Jugend</span></Link>
            <Divider className="my-4" />
            <Link to="/aktive" className="w-full flex justify-center my-1"><span>Yoga</span></Link>
            <Divider className="my-4" />
            <Link to="/Gymnastik" className="w-full flex justify-center my-1"><span>Gymnastik</span></Link>
            <Divider className="my-4" />
            <Link to="/Kindertunen" className="w-full flex justify-center my-1"><span>Kindertunen</span></Link>
            <Divider className="my-4" />
            <Link to="/Sportheim" className="w-full flex justify-center my-1"><span>Sportheim</span></Link>
            <Divider className="my-4" />
            <Link to="/Veranstaltungen" className="w-full flex justify-center my-1"><span>Veranstaltungen</span></Link>
            <Divider className="my-4" />
            <Link to="/Sponsoren" className="w-full flex justify-center my-1"><span>Sponsoren</span></Link>
            <Divider className="my-4" />
            <Link to="/Kontakt" className="w-full flex justify-center my-1"><span>Kontakt</span></Link>
        </div>
    )
}

export default Sidebar