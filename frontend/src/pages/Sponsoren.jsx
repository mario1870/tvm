import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const Sponsoren = () => {

    const sponsoren = [
        {name: "Getränke Riedinger", bild: "/sponsoren/riedinger.jpg", link: "https://www.facebook.com/p/Getr%C3%A4nke-Riedinger-GmbH-Co-KG-100057218480827/?locale=de_DE"}, 
        {name: "Sport Schaal", bild: "/sponsoren/schaal.jpg", link: "https://www.intersport.de/"}, 
        {name: "Zwiefalter Klosterbräu", bild: "/sponsoren/zwiefalter.jpg", link: "https://www.zwiefalter.de/"}, 
        {name: "Metzgerei Heinrich", bild: "/sponsoren/heinrich.jpg", link: "https://www.metzgerei-heinrich.de/"}, 
        {name: "Teamdrumming Helge Rosenbaum", bild: "/sponsoren/teamdrumming.png", link: "https://www.teamdrumming.com/"}, 
        {name: "Gärtnerei Scholz", bild: "/sponsoren/scholz.jpg", link: "https://gaertnereischolz.de/"},
        {name: "Kanz Automobile", bild: "/sponsoren/kanz.jpg", link: "https://kanz-automobile.com/"},
        {name: "Emele Werbetechnik", bild: "/sponsoren/emele.jpg", link: "https://www.werbetechnik-emele.de/"}
    ]

    return (
        <>
            <div className="pt-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-400 to-violet-500">
                <h1 className="text-3xl w-full text-center py-8 font-bold md:py-16 md:text-6xl">Sponsoren</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {sponsoren.map((sponsor, index) => (
                        <div key={index} className="w-full my-4 flex flex-col justify-center items-center">1
                                <Card className="py-4 sm:w-60 mx-6 ">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-base uppercase font-bold">{sponsor.name}</p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <a href={sponsor.link}>
                                            <Image className="h-40 w-80 object-cover object-center" alt={sponsor.name} src={sponsor.bild} />
                                        </a>
                                    </CardBody>
                                </Card>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Sponsoren