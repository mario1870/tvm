import SpielerCard from "./SpielerCard"
import React, { useState, useEffect } from 'react';
import { MY_URL } from "../../config";

const Kader = () => {

    const [aktiveDaten, setAktiveDaten] = useState([]);

    useEffect(() => {
        // Funktion zum Abrufen von Daten
        const fetchData = async () => {
          try {
            const response = await fetch(`${MY_URL}/aktive/`);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setAktiveDaten(data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        // Daten beim Mounten der Komponente abrufen
        fetchData();
      }, []);

      
    return(
        <div className="w-full">
            
            <h1 className="text-4xl text-center py-12">Kader 2023/2024</h1>

            <div className="my-4">
                <h1 className="text-3xl py-3 px-6">Trainer</h1>  
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-8 gap-4">
                    {aktiveDaten
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
                    {aktiveDaten
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
                    {aktiveDaten
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
                    {aktiveDaten
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
                    {aktiveDaten
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