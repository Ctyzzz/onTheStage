import React, { useRef, useEffect } from "react";

import styles from "./TeenSpec.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Nutcracker from "@public/nutcracker.png"
import Cinderella from "@public/cinderella.png"
import ThreeIvana from "@public/threeIvana.png"
import UnderGrowth from "@public/undergrowth.png"
import Scientists from "@public/scientists.png"

import NutcrackerHover from "@public/nutcrackerhover.png"
import CinderellaHover from "@public/cinderellahover.png"
import ThreeIvanaHover from "@public/threeivanahover.png"
import UnderGrowthHover from "@public/undergrowthhover.png"
import ScientistsHover from "@public/scientistshover.png"


const TeenSpec = () => {
    const cardsRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent) => {
    if (cardsRef.current) {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    if (cards) {
      cards.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (cards) {
        cards.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

    return(
        <div className={styles.teenspec}>
            <p>Спектакли для детей от 6 лет</p>
            <div className={styles["teenspec__cards"]} ref={cardsRef}>
                <RateCard pic={Nutcracker} hoverPic={NutcrackerHover}/>
                <RateCard pic={Cinderella} hoverPic={CinderellaHover}/>
                <RateCard pic={ThreeIvana} hoverPic={ThreeIvanaHover}/>
                <RateCard pic={UnderGrowth} hoverPic={UnderGrowthHover}/>
                <RateCard pic={Scientists} hoverPic={ScientistsHover}/>
            </div>
        </div>
    )
}

export default TeenSpec;