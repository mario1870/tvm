
import Newsfeed from "../components/home/newsfeed";
import Carousel from "../components/home/carousel";
import PDFDownloadButton from "../components/home/beitrissPDF";

const Home = () => {

    return (
        <>
            <div className="z-20">
                <div className="w-full max-h-screen flex flex-col md:flex-row min-h-screen" >
                  <Carousel />
                </div>

                <div className="w-full flex flex-col items-center py-8 px-2 md:px-4 xl:px-20">

                  <PDFDownloadButton />


                  <Newsfeed />
                  

                </div>
            </div>

        </>
    )
}

export default Home
