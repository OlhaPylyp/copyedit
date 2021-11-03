import React from "react";
import fields from "../../Jsone/portfolio.json";
import name from "../../Jsone/copyedit.json";
import Portfoliolist from "../../components/PortfolioList";
import Footer from "../../components/Footer/Footer";
const Portfolio = () => {
  return (
    <div>
      <Portfoliolist fields={fields} />
      <Footer name={name} />
    </div>
  );
};
export default Portfolio;
