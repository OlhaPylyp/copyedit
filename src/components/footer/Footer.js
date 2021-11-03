import React from "react";
import styles from "./Footer.module.css";
import Icons from "../Icons/Icons";

function Footer({ name }) {
  return (
    <div className={styles.footer_container}>
      <p className={styles.footer_title}>присоединяйтесь</p>
      <ul className={styles.footer_social}>
        {name.map(({ name, link }) => {
          return (
            <li className={styles.item}>
              <a
                href={link}
                className={styles.footer_social_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ссылка инстаграм"
              >
                <Icons
                  name={name}
                  color="blue"
                  size="44"
                  className="footer_social_link"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Footer;
