// export default Carrossel;
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import img1 from "./img/Noticia.svg";
import "./carousel.css";

const imgs = [img1, img1, img1, img1];

const Carrossel = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="carousel">
      <motion.div
        ref={carousel}
        className="carousel-container"
        while={{ cursor: "grabbing" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="carousel-track"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {imgs.map((img) => (
            <motion.div className="carousel-slide" key={img}>
              <img src={img} alt="Carrossel" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Carrossel;
