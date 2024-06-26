import React, { useRef, useEffect } from "react";

import styles from "./Selection.module.scss"

import BigCardNo from "@ui/BigCardNo/BigCardNo";

import Tanya from "@public/tanyaback.png"
import Space from "@public/spaceback.png"
import Revizor from "@public/revizorback.png"
import Proud from "@public/proudback.png"
import Forest from "@public/forestback.png"

const Selection = () => {
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
        <div className={styles.selection}>
            <p className={styles["selection__title"]}>Подборки по настроению</p>
            <div className={styles["selection__cards"]} ref={cardsRef}>
                <BigCardNo title={"ТАНЯ"} about={"Для тех, кто сбился с пути"} background={Tanya}/>
                <BigCardNo title={"КОСМОС"} about={"Для тех, кто перестал верить"} background={Space}/>
                <BigCardNo title={"РЕВИЗОР"} about={"Для тех, кто скучал по классике"} background={Revizor}/>
                <BigCardNo title={"ГОРДАЯ"} about={"Для тех, кто хочет задуматься"} background={Proud}/>
                <BigCardNo title={"ЛЕС"} about={"Для тех, кто хочет посмеяться от души"} background={Forest}/>
            </div>
        </div>
    )
}

export default Selection;