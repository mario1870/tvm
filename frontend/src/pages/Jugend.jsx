
import FadeInWhenVisible from "../animationSections/fadeInWhenVisible";
import { useEffect, useState } from "react";
import { MY_URL } from "../config";

const Jugend = () => {
    
    const [jugendDaten, setJugendDaten] = useState([]);

    useEffect(() => {
        // Funktion zum Abrufen von Daten
        const fetchData = async () => {
            try {
            const response = await fetch(`${MY_URL}jugend/`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setJugendDaten(data);
            } catch (error) {
            console.error('Error fetching data:', error.message);
            }
        };
    
        // Daten beim Mounten der Komponente abrufen
        fetchData();
    }, []);

    return (
        <>
            <div className="pt-20">
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full px-10 xl:px-20">
                    {jugendDaten.map((constainer, index) => (
                        <FadeInWhenVisible key={index}>
                            <div className="flex flex-col justify-center items-center border-b-2 pb-4 border-blue-500">
                                <h1 className="text-4xl py-6">{constainer.alter}</h1>
                                <img className="w-full md:px-20" src={constainer.bild} alt="" />
                                <div className="flex gap-2 my-2">
                                    <p className="font-bold">Training: </p>
                                    <p>{constainer.trainingszeiten}</p>
                                </div>
                                <div className="flex gap-2 my-2">
                                    <p className="font-bold">Trainer:</p>
                                    <p>{constainer.trainer}</p> 

                                </div>
                                
                                <p className="text-xl py-3 text-center">Jetzt aktuelle Ergebnisse checken unter: <a href={constainer.fussballde} className="text-black underline">Fussball.de</a></p>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Jugend