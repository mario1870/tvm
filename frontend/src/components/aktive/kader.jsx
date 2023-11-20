import SpielerCard from "./SpielerCard"

const Kader = () => {

    const spieler = [
        {name: "Florian Liebig", position: "coach", bild: "/spieler/Sonstiges/liebig.png"},
        {name: "Felix Raith", position: "coach", bild: "/spieler/Sonstiges/fe.png"},
        {name: "Jens Leipert", position: "tw", bild: "/spieler/Torwart/Jens_Leipert.png"},
        {name: "Fabio Maas", position: "tw", bild:"/spieler/Torwart/Fabio_Maas.png"},
        {name: "Christoph Schäfer", position: "def", bild:"/spieler/Abwehr/Christoph_Schafer.png"},
        {name: "Kai Ulmer", position: "def", bild:"/spieler/Abwehr/Kai_Ulmer.png"},
        {name: "Felix Riedinger", position: "def", bild: "/spieler/Abwehr/Felix_Riedinger.png"},
        {name: "Kevin Scholz", position: "def", bild: "/spieler/Abwehr/Kevin_Scholz.png"},
        {name: "Marco Krumm", position: "def", bild: "/spieler/Abwehr/Marco_Krumm.png"},
        {name: "Mario Raach", position: "def", bild: "/spieler/Abwehr/Mario_Raach.png"},
        {name: "Mirko Flad", position: "def", bild: "/spieler/Abwehr/Mirko_Flad.png"},
        {name: "Florian Mayer", position: "mid", bild: "/spieler/Mittelfeld/Flo_Mayer.png"},
        {name: "Kai Heinzelmann", position: "mid", bild: "/spieler/Mittelfeld/Kai_Heinzelmann.png"},
        {name: "Louis Riedinger", position: "mid", bild: "/spieler/Mittelfeld/Louis_Riedinger.png"},
        {name: "Marc Scholz", position: "mid", bild: "/spieler/Mittelfeld/Marc_Scholz.png"},
        {name: "Oliver Riechel", position: "mid", bild: "/spieler/Mittelfeld/Oli_Riechel.png"},
        {name: "Christian Wittner", position: "st", bild: "/spieler/Sturm/Christian_Wittner.png"},
        {name: "Julian Sechting", position: "st", bild: "/spieler/Sturm/Juli_Sechting.png"},
        {name: "Lukas Maichle", position: "st", bild: "/spieler/Sturm/Luki_Maichle.png"},
        {name: "Lukas Wallenmeier", position: "st", bild: "/spieler/Sturm/Luki_Wallenmeier.png"},
    ]

    return(
        <div className="w-full">
            
            <h1 className="text-4xl text-center py-12">Kader 2023/2024</h1>

            <div className="my-4">
                <h1 className="text-3xl py-3 px-6">Trainer</h1>  
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
                    {spieler
                    .filter(element => element.position === 'coach')
                    .map(element => (
                        <div key={element.name} className="flex justify-center items-center">
                            <SpielerCard name={element.name} img={element.bild} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-4">
                <h1 className="text-3xl py-3 px-6">Torwart</h1>  
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
                    {spieler
                    .filter(element => element.position === 'tw')
                    .map(element => (
                        <div key={element.name} className="flex justify-center items-center">
                            <SpielerCard name={element.name} img={element.bild} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-4">
                <h1 className="text-3xl py-3 px-6">Abwehr</h1>  
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
                    {spieler
                    .filter(element => element.position === 'def')
                    .map(element => (
                        <div key={element.name} className="flex justify-center items-center">
                            <SpielerCard name={element.name} img={element.bild} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-4">
                <h1 className="text-3xl py-3 px-6">Mittelfeld</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
                    {spieler
                    .filter(element => element.position === 'mid')
                    .map(element => (
                        <div key={element.name} className="flex justify-center items-center">
                            <SpielerCard name={element.name} img={element.bild} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-4">
                <h1 className="text-3xl py-3 px-6">Angriff</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
                    {spieler
                    .filter(element => element.position === 'st')
                    .map(element => (
                        <div key={element.name} className="flex justify-center items-center">
                            <SpielerCard name={element.name} img={element.bild} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Kader