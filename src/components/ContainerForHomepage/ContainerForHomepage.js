import React from "react";
import styles from "./ContainerForHomepage.module.css";
const ContainerForHomepage = (props) => {
  return <div className={styles.homeContainer}>{props.children}</div>;
};
export default ContainerForHomepage;
