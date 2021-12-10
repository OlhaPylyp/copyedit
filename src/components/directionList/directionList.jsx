import React from "react";

import PropTypes from "prop-types";
import styles from "./DirectionList.module.css";

const FieldsList = ({ fields }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Основные тематики</h2>
    <ul className={styles.list}>
      {" "}
      {fields.map(({ img, id, title, text }) => (
        <li className={styles.item} key={id}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.number}>{id}</p>
          <p className={styles.text}>{text}</p>
          <img className="avatar" src={img} alt={title} width="350" />
        </li>
      ))}
    </ul>
  </div>
);

FieldsList.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
};
FieldsList.prototype = {
  fields: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};

export default FieldsList;
