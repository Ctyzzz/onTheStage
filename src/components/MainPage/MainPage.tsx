import styles from './MainPage.module.scss'
import React, { useRef, useState, useEffect } from "react";

import Card from '../ui/Card/Card'
import bronnaya_show from './../../../public/assets/MainPage/bronnaya_show.png'
import zolushka from './../../../public/assets/MainPage/zolushka.png'
import piter from './../../../public/assets/MainPage/piter.png'
import gordaya from './../../../public/assets/MainPage/gordaya.png'
import ozero from './../../../public/assets/MainPage/ozero.png'
import kabare from './../../../public/assets/MainPage/kabare.png'

import vector from './../../../public/assets/MainPage/vector.svg'
import icon from './../../../public/assets/MainPage/icon.svg'

import flame from './../../../public/assets/MainPage/categories/Flame.svg'
import gamepad from './../../../public/assets/MainPage/categories/gamepad.svg'
import microphone from './../../../public/assets/MainPage/categories/microphone.svg'
import oscar from './../../../public/assets/MainPage/categories/oscar.svg'
import theatermasks from './../../../public/assets/MainPage/categories/theatermasks.svg'
import star from './../../../public/assets/MainPage/categories/star.svg'

import new_gordaya from './../../../public/assets/MainPage/newfilms/new_gordaya.png'
import new_kabare from './../../../public/assets/MainPage/newfilms/new_kabare.png'
import new_ozero from './../../../public/assets/MainPage/newfilms/new_ozero.png'
import new_friderman from './../../../public/assets/MainPage/newfilms/new_friderman.png'
import new_damadog from './../../../public/assets/MainPage/newfilms/new_damadog.png'
import new_grimer from './../../../public/assets/MainPage/newfilms/new_grimer.png'
import new_sin from './../../../public/assets/MainPage/newfilms/new_sin.png'
import new_idiot from './../../../public/assets/MainPage/newfilms/new_idiot.png'
import new_mayakovskiy from './../../../public/assets/MainPage/newfilms/new_mayakovskiy.png'
import new_les from './../../../public/assets/MainPage/newfilms/new_les.png'
import new_revizor from './../../../public/assets/MainPage/newfilms/new_revizor.png'
import new_nomer13 from './../../../public/assets/MainPage/newfilms/new_nomer13.png'
import new_schelkuni from './../../../public/assets/MainPage/newfilms/new_schelkuni.png'
import new_zolushka from './../../../public/assets/MainPage/newfilms/new_zolushka.png'
import new_3ivana from './../../../public/assets/MainPage/newfilms/new_3ivana.png'
import new_nedorosl from './../../../public/assets/MainPage/newfilms/new_nedorosl.png'
import new_uchenie from './../../../public/assets/MainPage/newfilms/new_uchenie.png'
import new_kosmos from './../../../public/assets/MainPage/newfilms/new_kosmos.png'
import new_dvazayca from './../../../public/assets/MainPage/newfilms/new_dvazayca.png'
import new_faust from './../../../public/assets/MainPage/newfilms/new_faust.png'
import new_otello from './../../../public/assets/MainPage/newfilms/new_otello.png'
import new_triviata from './../../../public/assets/MainPage/newfilms/new_triviata.png'
import new_pikovayadama from './../../../public/assets/MainPage/newfilms/new_pikovayadama.png'
import new_aida from './../../../public/assets/MainPage/newfilms/new_aida.png'
import new_toska from './../../../public/assets/MainPage/newfilms/new_toska.png'
import new_karamazovi from './../../../public/assets/MainPage/newfilms/new_karamazovi.png'
import new_rigoletto from './../../../public/assets/MainPage/newfilms/new_rigoletto.png'

import comp_kosmos from './../../../public/assets/MainPage/compilations/comp_kosmos.png'
import comp_revizor from './../../../public/assets/MainPage/compilations/comp_revizor.png'
import comp_gordaya from './../../../public/assets/MainPage/compilations/comp_gordaya.png'
import comp_les from './../../../public/assets/MainPage/compilations/comp_les.png'

import special_mama from './../../../public/assets/MainPage/special/special_mama.png'
import special_volk from './../../../public/assets/MainPage/special/special_volk.png'
import special_greshniki from './../../../public/assets/MainPage/special/special_greshniki.png'
import special_trigoda from './../../../public/assets/MainPage/special/special_trigoda.png'

const MainPage = () => {
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
        <div className={styles.MainPage}>
            <div 
                className={styles["MainPage__cards"]}
                ref={galleryRef}
            >
                <Card picture={bronnaya_show}></Card>
                <Card picture={zolushka}></Card>
                <Card picture={piter}></Card>
                <Card picture={gordaya}></Card>
                <Card picture={ozero}></Card>
                <Card picture={kabare}></Card>
                <Card picture={kabare}></Card>
                <Card picture={kabare}></Card>
                <Card picture={kabare}></Card>
                <Card picture={kabare}></Card>
            </div>
            {showHint && (
                <div className={styles["MainPage__hint"]}>
                    <div className={styles["hint-circle"]}></div>
                </div>
            )}
        </div>
    );
}
export default MainPage;