import React, { useRef, useEffect } from "react";

import styles from "./Opera.module.scss"

import RateCard from "@ui/RateCard/RateCard";

import Triviata from "@public/triviata.png"
import Rigoletto from "@public/rigoletto.png"
import Aida from "@public/aida.png"
import Faust from "@public/faust.png"
import Karamazovi from "@public/karamazovi.png"
import Yearning from "@public/yearning.png"
import QueenOfSpades from "@public/queenofspades.png"

import TriviataHover from "@public/triviatahover.png"
import RigolettoHover from "@public/rigolettohover.png"
import AidaHover from "@public/aidahover.png"
import FaustHover from "@public/fausthover.png"
import KaramazoviHover from "@public/karamazovihover.png"
import YearningHover from "@public/yearninghover.png"
import QueenOfSpadesHover from "@public/queenofspadeshover.png"


const Opera = () => {
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
        <div className={styles.opera}>
            <p>Опера</p>
            <div className={styles["opera__cards"]} ref={cardsRef}>
                <RateCard pic={Triviata} hoverPic={TriviataHover}/>
                <RateCard pic={Rigoletto} hoverPic={RigolettoHover}/>
                <RateCard pic={Aida} hoverPic={AidaHover}/>
                <RateCard pic={Faust} hoverPic={FaustHover}/>
                <RateCard pic={Karamazovi} hoverPic={KaramazoviHover}/>
                <RateCard pic={Yearning} hoverPic={YearningHover}/>
                <RateCard pic={QueenOfSpades} hoverPic={QueenOfSpadesHover}/>
            </div>
        </div>
    )
}

export default Opera;