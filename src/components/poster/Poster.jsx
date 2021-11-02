import React from "react";
import styles from "./Poster.module.css";
const Poster = () => (
  <section className={styles.overlay}>
    <div className={styles.poster}>
      <h1 className={styles.title}>
        Копирайтер с опытом <br /> более пяти лет
      </h1>
      <p>Lorem5 Lorem5 Lorem5 Lorem5 Lorem5 </p>
      <button className={styles.btn}>Обо мне</button>
    </div>
  </section>
);
export default Poster;
