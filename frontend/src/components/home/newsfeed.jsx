import { useState, useEffect, useRef } from "react"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";
import { useInView, motion } from "framer-motion";
import FadeInWhenVisible from "../../animationSections/fadeInWhenVisible";
import { MY_URL } from "../../config";

const Newsfeed = () => {

  const [newsfeedDaten, setNewsfeedDaten] = useState([]);

  useEffect(() => {
      // Funktion zum Abrufen von Daten
      const fetchData = async () => {
        try {
          const response = await fetch(`${MY_URL}/newsfeed/`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          setNewsfeedDaten(data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      // Daten beim Mounten der Komponente abrufen
      fetchData();
    }, []);

  const ref = useRef(null)

  const isInView = useInView(ref)
      
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {newsfeedDaten
            .filter(container => container.datum) // Filtere null oder undefinierte Datumsangaben
            .sort((a, b) => new Date(b.datum) - new Date(a.datum))
            .map((container, index) => (
              <FadeInWhenVisible key={newsfeedDaten.index}>
                  <Card className="p-4 w-full lg:h-80 flex flex-col lg:flex-row " key={index} >

                  <CardHeader className="h-auto lg:h-full w-full lg:w-auto">
                      <img alt="Bild" className="rounded-xl w-full h-auto lg:h-72" src={container.bild} />
                  </CardHeader>
                  <div ref={ref} />

                  <CardBody className="overflow-visible py-2 h-auto">
                      <p className="text-tiny uppercase font-bold">Aktuell</p>
                      <h4 className="font-bold text-large">{container.uberschrift}</h4>
                      <ScrollShadow hideScrollBar className="w-full h-52 lg:h-full">
                      <div dangerouslySetInnerHTML={{ __html: container.text }} />
                      </ScrollShadow>
                  </CardBody>
                  </Card>
              </FadeInWhenVisible>
            ))}
        </div>
    )
}

export default Newsfeed