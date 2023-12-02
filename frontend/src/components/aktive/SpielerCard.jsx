import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import FadeInWhenVisible from "../../animationSections/fadeInWhenVisible";

const SpielerCard = (props) => {
    return(
        <FadeInWhenVisible>
            <Card isFooterBlurred radius="lg" className="border-none w-40 flex items-center">
                <Image
                    alt={props.name}
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
        </FadeInWhenVisible>
    )
}

export default SpielerCard