import React from "react";
import IconsSVG from "./icons.svg";
import styles from "./Icons.module.css";

function Icons({ name, color, size, className }) {
  return (
    <svg
      //   className={styles.icon}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}

export default Icons;
