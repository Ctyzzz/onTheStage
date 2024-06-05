import React from "react";
import classNames from 'classnames';
import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
  className?: string; // Добавляем className как необязательный проп
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl, onClick, className }) => {
  return (
    <div
      className={classNames(styles.card, className)} // Используем classNames для объединения классов
      onClick={onClick}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.card__overlay}></div>
      <div className={styles.card__title}>{title}</div>
    </div>
  );
};

export default CategoryCard;