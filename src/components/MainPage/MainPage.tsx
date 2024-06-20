import styles from './MainPage.module.scss'
import React, { useRef, useState, useEffect } from "react";

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import ChatBot from "../BotButton/ChatBot"

import Catalog from "./Parts/Catalog/Catalog";
import New from "./Parts/New/New";
import Bronnaya from './Parts/Bronnaya/Bronnaya';
import Selection from './Parts/Selection/Selection';
import PlatformSelection from './Parts/PlatformSelection/PlatformSelection';
import Opera from './Parts/Opera/Opera';
import Special from './Parts/Special/Special';
import TeenSpec from './Parts/TeenSpec/TeenSpec';
import Musical from './Parts/Musical/Musical';



const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <Header/>
            <Catalog/>
            <New/>
            <Bronnaya/>
            <Selection/>
            <PlatformSelection/>
            <Opera/>
            <Special/>
            <TeenSpec/>
            <Musical/>
            <Footer/>
            <ChatBot/>
            
        </div>
    );
}
export default MainPage;