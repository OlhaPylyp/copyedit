import React from "react";
import styles from "../footer/Footer.module.css";
// import SvgLogo from "./logo.svg";
// import ReactSVG from "react-svg";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <p className={styles.footer_title}>присоединяйтесь</p>
      <ul className={styles.footer_social}>
        <li className={styles.item}>
          <a
            href="https://www.instagram.com/?hl=uk"
            className={styles.footer_social_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ссылка инстаграм"
          >
            {/* <svg className={styles.icon}>
              <use href="../../image/sprite.svg#icon-instagram"></use>
            </svg> */}
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://twitter.com/?lang=uk"
            className={styles.footer_social_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ссылка твиттер"
          >
            {/* <svg className={styles.icon}>
              <use href="../../image/sprite.svg#icon-twitter"></use>
            </svg> */}
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://uk-ua.facebook.com"
            class="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ссылка фейсбук"
          >
            {/* <svg className={styles.icon}>
              <use href="../../image/sprite.svg#icon-facebook"></use>
            </svg> */}
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.linkedin.com/uas/login?_l=ru"
            className={styles.footer_social_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ссылка линкедин"
          >
            {/* <svg className={styles.icon} width="18px" height="18px">
              <use xlinkHref="../../image/sprite.svg#icon-facebook"></use>
            </svg> */}
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
