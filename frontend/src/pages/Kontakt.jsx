
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const kontaktpersonen = [
    {name: "Marvin Rupacki", rolle: "Vorstand Organisation", nummer: "0173 6541435", email: "-", bild: "/kontakt/marvin.png" },
    {name: "Jan Hirlinger", rolle: "Vorstand Finanzen und Marketing ", nummer: "01514 0772863", email: "-", bild: "/kontakt/jan.jpg" },
    {name: "Marc Scholz", rolle: "Vorstand Organisation", nummer: "0176 22372560 ", email: "MarcScholz94@web.de ", bild: "/spieler/Mittelfeld/Marc_Scholz.png" },
    {name: "Christoph Schäfer", rolle: "Jugendleiter", nummer: "0162 3633854 ", email: "christoph.schaefer00@web.de ", bild: "/spieler/Abwehr/Christoph_Schafer.png" },
    {name: "Kasimir Biesinger", rolle: "Schriftführer / Internetauftritt ", nummer: "01520 3535044 ", email: "kasi.biesinger@gmx.net ", bild: "/spieler/Mittelfeld/Kasi_Biesinger.png" }
]

const Kontakt = () => {
    return (
        <>
            <div className="pt-20 min-h-screen md:pt-40">
                <div className="my-10 text-3xl text-center md:text-6xl px-4 md:px-10">
                    Kontakt
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {kontaktpersonen.map((person, index) => (
                        <Card className="py-4 mx-6 my-3">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <h4 className="font-bold text-large">{person.rolle}</h4>
                                <p className="text-base uppercase">{person.name}</p>
                                <small className="text-default-500 flex items-center gap-1"><MdEmail /> {person.email}</small>
                                <small className="text-default-500 flex items-center gap-1"><FaPhone /> {person.nummer}</small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 flex items-center justify-center">
                                <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={person.bild}
                                width={270}
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Kontakt