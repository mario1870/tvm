import Kader from "../components/aktive/kader"


const Aktive = () => {
    return(
        <div className="pt-20 z-20">

            <div className="w-full flex items-center justify-center py-8 drop-shadow-2xl z-30">
                <img src={"/mannschaft.png"} alt="Logo" className="w-full px-2 md:w-auto rounded-lg" />
            </div>

            <div className="grid gap-4">
                <Kader />
            </div>
            

        </div>
    )
}

export default Aktive