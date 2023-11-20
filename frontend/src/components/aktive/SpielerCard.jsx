import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";


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
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          {children}
        </motion.div>
      );
  }

const SpielerCard = (props) => {
    return(
        <Section>
            <Card
            isFooterBlurred
            radius="lg"
            className="border-none w-40 flex items-center"
            >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={250}
                    src={props.img}
                    width={250}
                    shadow="lg"
                />
                <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-0 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_20px)] shadow-small ml-1 z-10 flex justify-center">
                    <p className="text-sm text-center text-white/90">{props.name}</p>
                </CardFooter>
            </Card>
        </Section>
    )
}

export default SpielerCard