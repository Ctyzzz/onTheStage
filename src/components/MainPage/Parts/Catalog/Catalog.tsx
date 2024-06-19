import React, { useRef, useState, useEffect } from "react";

import styles from "./Catalog.module.scss";

import BigCard from "@ui/BigCard/BigCard";
import Genre from "@ui/Genre/Genre";

import Tanya from "@public/tanyaback.png";
import Proud from "@public/proudback.png";
import Peter from "@public/peterback.png";
import Lake from "@public/lakeback.png";
import Cinderella from "@public/cinderellaback.png";
import Cabaret from "@public/cabaretback.png";

import fire from "@public/fire.svg";
import masks from "@public/masks.svg";
import mic from "@public/mic.svg";
import gamepad from "@public/gamepad.svg";
import stickman from "@public/stickman.svg";
import stars from "@public/stars.svg";

const Catalog = () => {
    const galleryRef = useRef(null);
    const [showHint, setShowHint] = useState(true);

    const handleSwipeStart = () => {
        setShowHint(false);
    };

    useEffect(() => {
        const gallery = galleryRef.current;

        const handleTouchStart = () => handleSwipeStart();
        const handleMouseDown = () => handleSwipeStart();
        const handleWheel = (e) => {
            e.preventDefault();
            gallery.scrollLeft += e.deltaY;
        };

        gallery.addEventListener('touchstart', handleTouchStart);
        gallery.addEventListener('mousedown', handleMouseDown);
        gallery.addEventListener('wheel', handleWheel);

        return () => {
            gallery.removeEventListener('touchstart', handleTouchStart);
            gallery.removeEventListener('mousedown', handleMouseDown);
            gallery.removeEventListener('wheel', handleWheel);
        };
    }, []);

  return (
    <div className={styles.catalog}>
      <div className={styles["catalog__cards"]} ref={galleryRef}>
        <BigCard
          naming={"ПИТЭР"}
          year={"2001"}
          theatre={"театр МТЮЗ"}
          duration={"2 ч. 20 мин."}
          rate={""}
          about={"Волшебная сказка <br/> о тепле родного дома <br/> и прохладного вольного <br/> ветра"}
          background={Peter}
        />
        <BigCard
          naming={"ТАНЯ"}
          year={"2022"}
          theatre={"Театр на Бронной"}
          duration={"1 ч. 20 мин."}
          rate={"18+"}
          about={"Камерная драма <br/> об истории любви <br/> и взрослении девушки <br/> Тани"}
          background={Tanya}
        />
        <BigCard
          naming={"ГОРДАЯ"}
          year={""}
          theatre={""}
          duration={""}
          rate={""}
          about={"Спектакль поставлен <br/> по роману Достоевского <br/> «Униженные <br/> и оскорбленные»"}
          background={Proud}
        />
        <BigCard
          naming={"ОЗЕРО"}
          year={"2001"}
          theatre={"Большой театр"}
          duration={"2 ч. 40 мин."}
          rate={""}
          about={"История принца Зигфрида. <br/> который влюбляется <br/> в прекрасную Одетту"}
          background={Lake}
        />
        <BigCard
          naming={"КАБАРЕ"}
          year={"2021"}
          theatre={"театр Оперетты"}
          duration={"2 ч. 40 мин."}
          rate={""}
          about={"История Салли Боулз, <br/> молодой английской певицы <br/> и ее бурных романах на фоне <br/> фашизма"}
          background={Cabaret}
        />
        <BigCard
          naming={"ЗОЛУШКА"}
          year={"2021"}
          theatre={"театр Оперетты"}
          duration={"2 ч. 40 мин."}
          rate={""}
          about={"Сказка о трудолюбивой <br/> красавице Золушке, <br/> ее злобной мачехе <br/> и сказочном принце"}
          background={Cinderella}
        />
      </div>
      {showHint && (
            <div className={styles["catalog__hint"]}>
                <div className={styles["hint-circle"]}></div>
            </div>
        )}
      <div className={styles["catalog__genres"]}>
        <Genre logo={fire} text={"Новинки"} />
        <Genre logo={masks} text={"Спектакли"} />
        <Genre logo={mic} text={"Опера"} />
        <Genre logo={gamepad} text={"Интерактив"} />
        <Genre logo={stickman} text={"Балет"} />
        <Genre logo={stars} text={"Для детей"} />
      </div>
    </div>
  );
};

export default Catalog;
