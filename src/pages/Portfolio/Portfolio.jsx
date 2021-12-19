import React from "react";
import fields from "../../Jsone/portfolio.json";
// import name from "../../Jsone/copyedit.json";
import Portfoliolist from "../../components/PortfolioList";
import styles from "./Portfolio.module.css";
// import ContainerForHomepage from "../../components/ContainerForHomepage/ContainerForHomepage";
// import Footer from "../../components/Footer/Footer";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Portfoliolist fields={fields} />
      {/* <Footer name={name} /> */}
    </div>
  );
};
export default Portfolio;
