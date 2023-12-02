import {Divider} from "@nextui-org/react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../animationSections/fadeInWhenVisible";

const Jugend = () => {

    const jugend = [
        {alter: "A-Jugend", bild: "/jugend/suschwas.jpg", fussballde: "https://www.fussball.de/mannschaft/sgm-killertal-alb-zollern-fc-killertal-04-wuerttemberg/-/saison/2324/team-id/02F3K1K928000000VS5489B1VVS28625#!/"},
        {alter: "B-Jugend", bild: "/jugend/suschwas.jpg", fussballde: "https://www.fussball.de/mannschaft/sgm-stetten-salm-alb-zollern-fc-stetten-salmendingen-wuerttemberg/-/saison/2324/team-id/02IP636VOG000000VS5489B1VT368TME#!/"},
        {alter: "C-Jugend", bild: "/jugend/suschwas.jpg", fussballde: "https://www.fussball.de/mannschaft/sgm-melchingen-alb-zollern-tv-melchingen-wuerttemberg/-/saison/2324/team-id/02F5SMVLOC000000VS5489B1VVS28625#!/"},
        {alter: "D-Jugend", bild: "/jugend/suschwas.jpg", fussballde: "https://www.fussball.de/mannschaft/sgm-ringingen-alb-zollern-sv-ringingen-wuerttemberg/-/saison/2324/team-id/02LQATIJ4G000000VS5489B1VVVHS1D7#!/"},
        {alter: "E-Jugend", bild: "/jugend/suschwas.jpg", fussballde: "https://www.fussball.de/mannschaft/fc-stetten-salmendingen-fc-stetten-salmendingen-wuerttemberg/-/saison/2324/team-id/02M4VGMQ2K000000VS5489B1VVVHS1D7#!/"}
    ]

    return (
        <>
            <div className="pt-20">
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full px-10 xl:px-20">
                    {jugend.map((constainer, index) => (
                        <FadeInWhenVisible key={index}>
                            <div className="flex flex-col justify-center items-center border-b-2 pb-4 border-blue-500">
                                <h1 className="text-4xl py-6">{constainer.alter}</h1>
                                <img src={constainer.bild} alt="" />
                                <p className="text-xl py-3">Jetzt aktuelle Ergebnisse checken unter: <a href={constainer.fussballde} className="text-black underline">Fussball.de</a></p>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Jugend