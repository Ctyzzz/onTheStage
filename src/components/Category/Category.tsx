import { useState } from 'react'; 
import classNames from 'classnames'; 
import styles from './Category.module.scss'; 
import back from '@public/backgroundreg.svg'; 
import CategoryCard from './CategoryCard'; 
import { Cards1, Cards2, Cards3 } from '@src/const'; 
import ProgressIndicator from './ProgressIndicator'; 
import { useNavigate } from 'react-router-dom'; 
 
const Category: React.FC = () => { 
  const [progress, setProgress] = useState(1); 
  const [activeCards, setActiveCards] = useState<string[]>([]); 
  const navigate = useNavigate(); 
 
  const handleCardClick = (title: string) => { 
    setActiveCards((prev) => { 
      if (prev.includes(title)) { 
        return prev.filter((card) => card !== title); 
      } else { 
        return [...prev, title]; 
      } 
    }); 
  }; 
 
  const onSubmit = (currentProgress: number) => { 
    if (currentProgress < 3) { 
      setProgress((prev) => prev + 1); 
      setActiveCards([]); 
    } else {
      navigate('/subscription'); 
    }
  }; 
 
  return ( 
    <div className={styles.category}> 
      <div className={styles.category__left}> 
        <img src={back} alt="back" /> 
      </div> 
      <div className={styles.category__block}> 
        <div className={styles.category__block__header}> 
          <h1>Выберетите категории - {progress} </h1> 
          <p onClick={() => onSubmit(progress)}>Пропустить</p> 
        </div> 
 
        {progress === 1 && ( 
          <> 
            <p className={styles.category__block__text}>Подберите для себя любимые <br />жанры</p> 
            <div className={styles.category__block__items}> 
              {Cards1.map((obj) => ( 
                <CategoryCard 
                  key={obj.title} 
                  className={classNames(styles.category__block__items__card, { [styles.active]: activeCards.includes(obj.title) })} 
                  onClick={() => handleCardClick(obj.title)} 
                  imageUrl={obj.imageUrl} 
                  title={obj.title} 
                /> 
              ))} 
            </div> 
          </> 
        )} 
 
        {progress === 2 && ( 
          <> 
            <p className={styles.category__block__text}>Подберите спектакль под ваше <br />настроение и обстановку</p> 
            <div className={styles.category__block__items}> 
              {Cards2.map((obj) => ( 
                <CategoryCard 
                  key={obj.title} 
                  className={classNames(styles.category__block__items__card, { [styles.active]: activeCards.includes(obj.title) })} 
                  onClick={() => handleCardClick(obj.title)} 
                  imageUrl={obj.imageUrl} 
                  title={obj.title} 
                /> 
              ))} 
            </div> 
          </> 
        )} 
 
        {progress === 3 && ( 
          <> 
            <p className={styles.category__block__text}>Подберите спектакль по вашим <br />индивидуальным предпочтениям</p> 
            <div className={styles.category__block__items}> 
              {Cards3.map((obj) => ( 
                <CategoryCard 
                  key={obj.title} 
                  className={classNames(styles.category__block__items__card, { [styles.active]: activeCards.includes(obj.title) })} 
                  onClick={() => handleCardClick(obj.title)} 
                  imageUrl={obj.imageUrl} 
                  title={obj.title} 
                /> 
              ))} 
            </div> 
          </> 
        )} 
 
        {activeCards.length > 0 && ( 
          <button className={styles.category__block__button} onClick={() => onSubmit(progress)}>Продолжить</button> 
        )} 

        <ProgressIndicator progress={progress} /> 

      </div> 

      <div className={styles.category__right}> 

        <img src={back} alt="back" /> 

      </div> 

    </div> 

  ); 

}; 

 

export default Category;