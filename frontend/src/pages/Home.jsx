import { useState, useEffect, useRef } from "react"
import logo from "/mannschaft.png"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { PiNewspaperClippingFill } from "react-icons/pi";
import {ScrollShadow} from "@nextui-org/react";
import { useInView, motion } from "framer-motion";
import Newsfeed from "../components/home/newsfeed";


const Home = () => {

    return (
        <>
            <div className="z-20 py-20">
                <div className="w-full max-h-screen">
                    <img src={logo} alt="Logo" className="w-full max-h-screen object-cover object-center" />
                </div>

                <div className="w-full flex flex-col items-center py-8 px-2 md:px-4 xl:px-20">
                  <Card className="w-full" >
                    <CardHeader className="flex gap-3 w-full">
                      <PiNewspaperClippingFill className="h-full w-12" />
                      <div className="flex flex-col">
                        <p className="text-2xl">Aktuelles</p>
                      </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                      <p>Letztes Spiel Aktive: asfaefa</p>
                    </CardBody>
                    <Divider/>
                    <CardFooter>
                      <Link
                        isExternal
                        showAnchorIcon
                        href="https://www.fussball.de/verein/tv-melchingen-wuerttemberg/-/id/00ES8GNAVO00007VVV0AG08LVUPGND5I#!/"
                      >
                        Jetzt alle aktuellen Ergebnisse checken.
                      </Link>
                    </CardFooter>
                  </Card>

                  <Newsfeed />

                </div>
            </div>

        </>
    )
}

export default Home
