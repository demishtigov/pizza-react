import React from "react";
import styles from "./notFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <>
      <div className={styles.root}>
        <span className={styles.smile}>😔</span>
        <br />
        <h1>Ничего не найдено</h1>
        <p className={styles.description}>
          К сожалению на странице ничего не найдено
        </p>
      </div>
    </>
  );
};

export default NotFoundBlock;
