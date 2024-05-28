import React, { useRef, useState, useEffect } from "react";
import styles from "./Popular.module.scss";
import Card from "@ui/Card/Card";
import Messiah from "@public/messiah.png";
import Onegin from "@public/Onegin.png";
import BoD from "@public/balletofdifference.png";
import Saul from "@public/Saul.png";
import Anna from "@public/AnnaBolein.png";
import PierGunt from "@public/PierGunt.png";

const Popular = () => {
    const galleryRef = useRef(null);
    const [showHint, setShowHint] = useState(true);

    const handleSwipeStart = () => {
        setShowHint(false);
    };

    useEffect(() => {
        const gallery = galleryRef.current;

        const handleTouchStart = () => handleSwipeStart();
        const handleMouseDown = () => handleSwipeStart();

        gallery.addEventListener('touchstart', handleTouchStart);
        gallery.addEventListener('mousedown', handleMouseDown);

        return () => {
            gallery.removeEventListener('touchstart', handleTouchStart);
            gallery.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return (
        <div className={styles.popular}>
            <div className={styles["popular__title"]}>
                <h1>Популярное на платформе</h1>
                <p>Более тысячи спектаклей разных жанров</p>
            </div>
            <div 
                className={styles["popular__cards"]}
                ref={galleryRef}
            >
                <Card picture={Messiah}></Card>
                <Card picture={Onegin}></Card>
                <Card picture={BoD}></Card>
                <Card picture={Saul}></Card>
                <Card picture={Anna}></Card>
                <Card picture={PierGunt}></Card>
            </div>
            {showHint && (
                <div className={styles["popular__hint"]}>
                    <div className={styles["hint-circle"]}></div>
                </div>
            )}
        </div>
    );
}

export default Popular;
