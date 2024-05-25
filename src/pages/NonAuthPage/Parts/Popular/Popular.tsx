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

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(false);
        }, 1000); // Hide hint after 1 second of the first swipe
        return () => clearTimeout(timer);
    }, [showHint]);

    const handleMouseDown = (e) => {
        setShowHint(false);
        galleryRef.current.isDown = true;
        galleryRef.current.startX = e.pageX - galleryRef.current.offsetLeft;
        galleryRef.current.scrollLeft = galleryRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        galleryRef.current.isDown = false;
    };

    const handleMouseUp = () => {
        galleryRef.current.isDown = false;
    };

    const handleMouseMove = (e) => {
        if (!galleryRef.current.isDown) return;
        e.preventDefault();
        const x = e.pageX - galleryRef.current.offsetLeft;
        const walk = x - galleryRef.current.startX;
        galleryRef.current.scrollLeft = galleryRef.current.scrollLeft - walk;
    };

    return (
        <div className={styles.popular}>
            <div className={styles["popular__title"]}>
                <h1>Популярное на платформе</h1>
                <p>Более тысячи спектаклей разных жанров</p>
            </div>
            <div 
                className={styles["popular__cards"]}
                ref={galleryRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {showHint && (
                    <div className={styles.hint}>
                        <div className={styles.hintElement}></div>
                        <div className={styles.hintElement}></div>
                        <div className={styles.hintElement}></div>
                        <div className={styles.hintElement}></div>
                        <div className={styles.hintElement}></div>
                    </div>
                )}
                <Card picture={Messiah}></Card>
                <Card picture={Onegin}></Card>
                <Card picture={BoD}></Card>
                <Card picture={Saul}></Card>
                <Card picture={Anna}></Card>
                <Card picture={PierGunt}></Card>
            </div>
        </div>
    );
}

export default Popular;
