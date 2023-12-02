
import Newsfeed from "../components/home/newsfeed";
import Carousel from "../components/home/carousel";


const Home = () => {

    return (
        <>
            <div className="z-20">
                <div className="w-full max-h-screen flex flex-col md:flex-row min-h-screen" >
                  <Carousel />
                </div>

                <div className="w-full flex flex-col items-center py-8 px-2 md:px-4 xl:px-20">


                  <Newsfeed />
                  

                </div>
            </div>

        </>
    )
}

export default Home
