import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./Portfolio.module.css";

const PortfolioList = ({ fields }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <h2 className={styles.mainTitle}>ПОРТФОЛИО</h2>
      <p>Примеры моих работ</p>
      <ul className={styles.list}>
        {fields.map(({ img, id, title, text }) => (
          <li className={styles.item} key={id}>
            <img className={styles.avatar} src={img} alt={title} width="350" />
            <div className={styles.service_container}>
              <p className={styles.text}>{text}</p>
              <h3 className={styles.title}>{title}</h3>

              <Link to={`${pathname}${id}`}>
                <div className={styles.btn}>Интересно</div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

PortfolioList.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
};
PortfolioList.prototype = {
  fields: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};

export default PortfolioList;
