import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import NewsHeadline from "./newsHeadline";


const backgrounds = [
  { id: 1, url: "url('/home/elfer_wp.png')", },
  { id: 2, url: "url('/home/t2.jpg')", },
  { id: 3, url: "url('/home/yoga_wp.jpg')", },
]; // Bild-URLs, die du verwenden möchtest

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Wechsel zum nächsten Hintergrund
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 8000); // Ändere dies nach Bedarf, um die Zeit zwischen den Wechseln anzupassen

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={backgrounds[currentIndex].id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: backgrounds[currentIndex].url,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center"
      >
      

      <div className="flex w-11/12 md:w-8/12 2xl:min-w-[70rem] mb-20">
        <NewsHeadline />
      </div>

      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;
