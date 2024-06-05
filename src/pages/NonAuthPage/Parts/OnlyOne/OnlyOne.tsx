import {Link} from "react-router-dom"

import styles from "./OnlyOne.module.scss"

import GridProp from "@ui/GridProp/GridProp";
import RegBtn from "@ui/RegBtn/RegBtn";

import iconAbroad from "@public/iconAbroad.svg"
import iconEducationContent from "@public/iconEducationContent.svg"
import iconBehindScene from "@public/iconBehindScene.svg"
import iconImmersiveSpec from "@public/iconImmersiveSpec.svg"
import iconRecommendation from "@public/iconRecommendation.svg"
import iconCamera from "@public/iconCamera.svg"


const OnlyOne = () => {
    return(
        <div className={styles.onlyOne}>
            <div className={styles["onlyOne__allInOne"]}>
                <h1>Все на одной платформе</h1>
                <p>Создай вокруг атмосферу, а мы позаботимся <br/>
                об остальном</p>
                <div className={styles["onlyOne__allInOne__buttons"]}>
                    <RegBtn></RegBtn>
                    <Link to="/auth">
                        <button className={styles.logBtn}>
                            Войти
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles["onlyOne__gridCompose"]}>
                <GridProp 
                icon={iconAbroad} w={28} h={28} 
                title={"зарубежные <br/> спектакли"}
                about={"окажись на сцене мировых <br/> театров в одно касание"}>
                </GridProp>
                <GridProp 
                icon={iconEducationContent} w={34} h={34} 
                title={"образовательный <br/> контент"}
                about={"расширь знания о театре <br/> и его истории"}>
                </GridProp>
                <GridProp 
                icon={iconBehindScene} w={99} h={22} 
                title={"раздел <br/> засценой"}
                about={"загляни за кулисы и узнай <br/> обо всех секретах"}>
                </GridProp>
                <GridProp 
                icon={iconImmersiveSpec} w={34} h={34} 
                title={"иммерсивные <br/> спектакли"}
                about={"смотри вместе с друзьями <br/> и близкими"}>
                </GridProp>
                <GridProp 
                icon={iconRecommendation} w={38} h={38} 
                title={"система <br/> рекомендаций"}
                about={"подбери спектакль <br/> под настроение"}>
                </GridProp>
                <GridProp 
                icon={iconCamera} w={31} h={20} 
                title={"улучшенное <br/> качество"}
                about={"советские спектакли <br/> в высоком разрешении"}>
                </GridProp>
            </div>
        </div>
    )
}

export default OnlyOne;