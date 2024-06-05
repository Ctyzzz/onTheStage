import styles from './MainPage.module.scss'
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
    return (
        <div className={styles.mainPage}>
            <div className={styles.mainpage__scrollableContainer}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.item__imageContainer}>
                    <img src={bronnaya_show} />
                  </div>
                  <div  className={styles.item__text}>
                    <h1 className={styles.item__text__name}>ТАНЯ</h1>
                    <h2 className={styles.item__text__date}>2022<span style={{ margin: '30px' }}>Театр на бронной</span><span style={{ margin: '1px' }}>1ч. 20 мин.</span><span style={{ margin: '30px' }}>18+</span></h2>
                    <p className={styles.item__text__info}>Камерная драма <br/>об истории любви<br/> и взрослении девушки<br/> Тани </p>
                  </div>
                  <div className={styles.item__btn}>
                    <div className={styles.item__btn__watch}>
                      <img src={vector}/> Смотреть
                    </div>
                    <div className={styles.item__btn__save}>
                      <img src={icon}/>
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__imageContainer}>
                    <img src={zolushka}/>
                  </div>
                  <div  className={styles.item__text}>
                    <h1 className={styles.item__text__name}>ЗОЛУШКА</h1>
                    <h2 className={styles.item__text__date}>2021<span style={{ margin: '30px' }}> театр Оперетты </span><span style={{ margin: '1px' }}>2 ч. 40 мин.</span></h2>
                    <p className={styles.item__text__info}>Сказка о трудолюбивой<br/>красавице Золушке, <br/>ее злобной мачехе <br/>и сказочном принце</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__imageContainer}>
                  <img src={piter}/>
                  </div>
                  <div  className={styles.item__text}>
                    <h1 className={styles.item__text__name}>ПИТЭР</h1>
                    <h2 className={styles.item__text__date}>2001 <span style={{ margin: '30px' }}>театр МТЮЗ</span> <span style={{ margin: '1px' }}>2 ч. 20 мин.</span></h2>
                    <p className={styles.item__text__info}>Волшебная сказка <br/>о тепле родного дома <br/>и прохладного вольного<br/> ветра</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__imageContainer}>
                    <img src={bronnaya_show}/>
                  </div>
                  <div className={styles.item__text}>
                    <h1 className={styles.item__text__name}>ТАНЯ</h1>
                    <h2 className={styles.item__text__date}>2022<span style={{ margin: '30px' }}> Театр на бронной </span><span style={{ margin: '1px' }}>1ч. 20 мин. </span><span style={{ margin: '5px' }}> 18+ </span></h2>
                    <p className={styles.item__text__info}>Камерная драма <br/>об истории любви<br/> и взрослении девушки<br/> Тани </p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__imageContainer}>
                    <img src={gordaya}/>  
                  </div>
                  <div  className={styles.item__text}>
                    <h1 className={styles.item__text__name}>ГОРДАЯ</h1>
                    <p className={styles.item__text__info}>Спектакль поставлен <br/>по роману Достоевского <br/>«Униженные <br/>и оскорбленные»</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__imageContainer}>
                  <img src={ozero}/>
                  </div>
                  <div  className={styles.item__text}>
                    <h1 className={styles.item__text__name}>ОЗЕРО</h1>
                    <h2 className={styles.item__text__date}>2001<span style={{ margin: '30px' }}> Большой театр</span><span style={{ margin: '1px' }}> 2 ч. 40 мин.</span></h2>
                    <p className={styles.item__text__info}>История принца Зигфрида.<br/>который влюбляется<br/>в прекрасную Одетту</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.item__imageContainer}>
                    <img src={kabare}/>
                  </div>
                  <div  className={styles.item__text}>
                    <h1 className={styles.item__text__name}>КАБАРЕ</h1>
                    <h2  className={styles.item__text__date}>2021 <span style={{ margin: '30px' }}>театр Оперетты </span><span style={{ margin: '1px' }}>2 ч. 40 мин.</span></h2>
                    <p className={styles.item__text__info}>История Салли Боулз,<br/>молодой английской певицы <br/>и ее бурных романах на фоне<br/>фашизма</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainPage__categories}>
              <ul className={styles.mainPage__categories__list}>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={flame}/> Новинки</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={theatermasks}/>Спектакли</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={microphone}/>Опера</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={gamepad}/>Интерактив</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={oscar}/>Балет</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={star}/>Для детей</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={flame}/> Новинки</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={theatermasks}/>Спектакли</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={microphone}/>Опера</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={gamepad}/>Интерактив</div>
                </li>
                <li className={styles.case}>
                  <div className={styles.case__design}><img src={oscar}/>Балет</div>
                </li>
              </ul>
            </div>
            <div  className={styles.mainPage__newfilms}>
              <div className={styles.mainPage__newfilms__title}>Новинки на платформе</div>
              <ul className={styles.mainPage__newfilms__list}>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_gordaya}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_kabare}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_ozero}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_friderman}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_damadog}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_grimer}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_sin}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_idiot}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_mayakovskiy}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_les}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_revizor}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_nomer13}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_schelkuni}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_zolushka}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_3ivana}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_nedorosl}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_uchenie}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_kosmos}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_dvazayca}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_faust}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_otello}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_triviata}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_pikovayadama}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_aida}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_toska}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_karamazovi}/></li>
                <li className={styles.mainPage__newfilms__list__item}><img src={new_rigoletto}/></li>
              </ul>
            </div>
            <div className={styles.mainPage__bronnaya}>
              <div className={styles.mainPage__bronnaya__title}>Спектакли вашего любимого театра  «Малая Бронная»</div>
              <ul className={styles.mainPage__bronnaya__list}>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_gordaya}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_kabare}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_ozero}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_friderman}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_damadog}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_grimer}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_sin}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_idiot}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_mayakovskiy}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_les}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_revizor}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_nomer13}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_schelkuni}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_zolushka}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_3ivana}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_nedorosl}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_uchenie}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_kosmos}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_dvazayca}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_faust}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_otello}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_triviata}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_pikovayadama}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_aida}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_toska}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_karamazovi}/></li>
                <li className={styles.mainPage__bronnaya__list__item}><img src={new_rigoletto}/></li>
              </ul>
            </div>
            <div className={styles.mainPage__compilations}>
              <div className={styles.mainPage__compilations__title}>Подборки по настроению</div>
              <div className={styles.mainPage__compilations__list}>
                <div className={styles.mainPage__compilations__list__item}>
                  <img src={bronnaya_show} />
                  <h1>Таня</h1>
                  <p>Для тех, кто сбился с пути</p>
                </div>
                <div className={styles.mainPage__compilations__list__item}>
                  <div><img src={comp_kosmos} /></div>
                  <div>
                    <h1>КОСМОС</h1>
                    <p>Для тех, кто перестал верить</p>
                  </div>
                </div>
                <div className={styles.mainPage__compilations__list__item}>
                  <div><img src={comp_revizor} /></div>
                  <div> 
                    <h1>РЕВИЗОР</h1>
                    <p>Для тех, кто скучал по классике</p>
                  </div>
                </div>
                <div className={styles.mainPage__compilations__list__item}>
                  <div><img src={comp_gordaya} /></div>
                  <div>
                    <h1>ГОРДАЯ</h1>
                    <p>Для тех, кто хочет задуматься</p>
                  </div>
                </div>
                <div className={styles.mainPage__compilations__list__item}>
                  <div><img src={comp_les} /></div>
                  <div className={styles.mainPage__compilations__list__item__text}> 
                    <h1 className={styles.mainPage__compilations__list__item__text__name}>ЛЕС</h1>
                    <p className={styles.mainPage__compilations__list__item__info}>Для тех, кто хочет посмеяться от души</p>
                  </div> 
                </div>
              </div>
            </div>
            <div className={styles.mainPage__rec}>
              <div className={styles.mainPage__rec__title}>Выбор платформы</div>
              <ul className={styles.mainPage__rec__list}>
                <li className={styles.mainPage__rec__list__item}><img src={new_grimer}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_sin}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_idiot}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_mayakovskiy}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_les}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_revizor}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_nomer13}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_schelkuni}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_zolushka}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_3ivana}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_nedorosl}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_uchenie}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_kosmos}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_dvazayca}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_faust}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_otello}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_triviata}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_pikovayadama}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_aida}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_toska}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_karamazovi}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_rigoletto}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_gordaya}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_kabare}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_ozero}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_friderman}/></li>
                <li className={styles.mainPage__rec__list__item}><img src={new_damadog}/></li>
              </ul>
            </div>
            <div className={styles.mainPage__opera}>
              <div className={styles.mainPage__opera__title}>Опера</div>
              <ul className={styles.mainPage__opera__list}>
                <li className={styles.mainPage__opera__list__item}><img src={new_triviata}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_rigoletto}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_aida}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_faust}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_otello}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_grimer}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_sin}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_idiot}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_mayakovskiy}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_les}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_revizor}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_nomer13}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_schelkuni}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_zolushka}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_3ivana}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_nedorosl}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_uchenie}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_kosmos}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_dvazayca}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_faust}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_otello}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_triviata}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_pikovayadama}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_aida}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_toska}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_karamazovi}/></li>
                <li className={styles.mainPage__opera__list__item}><img src={new_rigoletto}/></li>
              </ul>
            </div>
            <div className={styles.mainPage__special}>
              <div className={styles.mainPage__special__title}>Подборки по настроению</div>
              <div className={styles.mainPage__special__list}>
                <div className={styles.mainPage__special__list__item}>
                  <img src={special_mama} />
                  <h1>Мама</h1>
                  <p>Для тех, кто скучает по маме</p>
                </div>
                <div className={styles.mainPage__special__list__item}>
                  <div><img src={special_volk} /></div>
                  <div>
                    <h1>В.О.Л.К</h1>
                    <p>Для тех, кто не верит в любовь</p>
                  </div>
                </div>
                <div className={styles.mainPage__special__list__item}>
                  <div><img src={special_greshniki} /></div>
                  <div> 
                    <h1>ГРЕШНИКИ</h1>
                    <p>Для тех, кто ищет ответы</p>
                  </div>
                </div>
                <div className={styles.mainPage__special__list__item}>
                  <div><img src={special_trigoda} /></div>
                  <div>
                    <h1>ТРИ ГОДА</h1>
                    <p>Для тех, кто давно не смеялся</p>
                  </div>
                </div>
                <div className={styles.mainPage__special__list__item}>
                  <div><img src={comp_les} /></div>
                  <div className={styles.mainPage__special__list__item__text}> 
                    <h1 className={styles.mainPage__special__list__item__text__name}>ЛЕС</h1>
                    <p className={styles.mainPage__special__list__item__info}>Для тех, кто хочет посмеяться от души</p>
                  </div> 
                </div>
              </div>
            </div>
            <div className={styles.mainPage__forkids}>
              <div className={styles.mainPage__forkids__title}>Мюзиклы</div>
              <ul className={styles.mainPage__forkids__list}>
                <li className={styles.mainPage__forkids__list__item}><img src={new_gordaya}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_kabare}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_ozero}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_friderman}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_damadog}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_grimer}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_sin}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_idiot}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_mayakovskiy}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_les}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_revizor}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_nomer13}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_schelkuni}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_zolushka}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_3ivana}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_nedorosl}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_uchenie}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_kosmos}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_dvazayca}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_faust}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_otello}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_triviata}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_pikovayadama}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_aida}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_toska}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_karamazovi}/></li>
                <li className={styles.mainPage__forkids__list__item}><img src={new_rigoletto}/></li>
              </ul>
            </div>
            <div className={styles.mainPage__musical}>
              <div className={styles.mainPage__musical__title}>Мюзиклы</div>
              <ul className={styles.mainPage__musical__list}>
                <li className={styles.mainPage__musical__list__item}><img src={new_gordaya}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_kabare}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_ozero}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_friderman}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_damadog}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_grimer}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_sin}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_idiot}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_mayakovskiy}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_les}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_revizor}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_nomer13}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_schelkuni}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_zolushka}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_3ivana}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_nedorosl}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_uchenie}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_kosmos}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_dvazayca}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_faust}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_otello}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_triviata}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_pikovayadama}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_aida}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_toska}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_karamazovi}/></li>
                <li className={styles.mainPage__musical__list__item}><img src={new_rigoletto}/></li>
              </ul>
            </div>
        </div>
    )
}

export default MainPage;