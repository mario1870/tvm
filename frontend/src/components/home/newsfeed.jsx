import { useState, useEffect, useRef } from "react"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";
import { useInView, motion } from "framer-motion";


function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1, x:0 },
            hidden: { opacity: 0, scale: 0.5, x: -200 }
          }}
        >
          {children}
        </motion.div>
      );
  }

const Newsfeed = () => {

    const aktuelles = [
        {uberschrift: "Überschrifdt", text: "Lorem Ipsudm", bild: "/news/yoga.jpg", datum: "12 Okt. 2023", text: "Lorem ipsum dolor sdit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        {uberschrift: "Überschrift 22", text: "Lorem Idpsum", bild: "/news/sgm.jpg", datum: "10 Sept. 2023", text: "Lorem ipsum dolosr sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        {uberschrift: "Überschrift 22d", text: "Loremd Ipsum", bild: "/news/shakeit.jpg", datum: "12 Okt. 2023", text: "Lorem ipsum dolosr sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        {uberschrift: "Überschrift fg", text: "Lorem Ipsufm", bild: "/news/vfbcamp.jpg", datum: "12 Okt. 2023", text: "Lorem ipsum dolor dssit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        {uberschrift: "Überschriftf", text: "Lorem Ipsumf", bild: "/news/weihnachtsfeier.png", datum: "12 Okt. 2023", text: "Lorem ipsudm dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
      ]

      const ref = useRef(null)
      const isInView = useInView(ref)
      
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
            {aktuelles.map((container, index) => (
            <Section>
                <Card className="p-4 w-full lg:h-80 flex flex-col lg:flex-row " key={index} >

                <CardHeader className="h-auto lg:h-full w-full lg:w-auto">
                    <img alt="Bild" className="rounded-xl w-full h-auto lg:h-72" src={container.bild} />
                </CardHeader>
                <div ref={ref} />

                <CardBody className="overflow-visible py-2 h-auto">
                    <p className="text-tiny uppercase font-bold">Aktuell</p>
                    <small className="text-default-500">{container.datum}</small>
                    <h4 className="font-bold text-large">{container.uberschrift}</h4>
                    <ScrollShadow hideScrollBar className="w-full h-32 lg:h-full">
                    <p>{container.text}</p>
                    </ScrollShadow>
                </CardBody>
                </Card>
            </Section>
            ))}
        </div>
    )
}

export default Newsfeed