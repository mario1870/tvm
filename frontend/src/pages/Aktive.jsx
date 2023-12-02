import Kader from "../components/aktive/kader"
import { motion } from "framer-motion"

const Aktive = () => {
    return(
        <div className="pt-20 z-20">

            <div className="w-full flex items-center justify-center py-16 drop-shadow-2xl z-30"  style={{ backgroundImage: `url(/bg_aktive.jpg)`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <motion.img initial={{ scale: 0.7, opacity:0 }} animate={{ scale: 1.0, opacity:1 }}   transition={{ type: "fade", duration: 0.4}} src={"/mannschaft.png"} alt="Logo" className="w-full px-2 md:w-auto rounded-lg" />
            </div>

            <div className="grid gap-4">
                <Kader />
            </div>
            

        </div>
    )
}

export default Aktive