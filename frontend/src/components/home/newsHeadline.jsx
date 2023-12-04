import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { PiNewspaperClippingFill } from "react-icons/pi";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const NewsHeadline = () => {

    const [data, setData] = useState(null);

    {/*useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/home/newsheadline');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Leere Abhängigkeitsliste sorgt dafür, dass der Effekt nur beim Mounten der Komponente ausgeführt wird.
  */}
  
    return(
      <div className="w-full">
        <Card className="w-full" >
              <CardHeader className="flex gap-3 w-full">
                  <PiNewspaperClippingFill className="h-full w-12" />
                  <div className="flex flex-col">
                      <p className="text-2xl">Aktuelles</p>
                  </div>
              </CardHeader>

              <Divider/>

              <CardBody>
                  {data ? (
                          // Verarbeite die Daten hier
                          <p>{data}</p>
                      ) : (
                          // Zeige Ladezustand oder Fehlermeldung an
                          <p>Die letzten Spiele der Hinrunde wurden auf Grund des Wetters abgesagt.</p>
                  )}
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
      </div>
    )
}

export default NewsHeadline