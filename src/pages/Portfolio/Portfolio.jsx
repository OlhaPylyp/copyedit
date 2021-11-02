import React from "react";
import fields from "../../Jsone/portolio.json";
import Portfoliolist from "../../components/PortfolioList";
import Footer from "../../components/footer/Footer";
const Portfolio = () => {
  return (
    <div>
      <Portfoliolist fields={fields} />
      <Footer />
    </div>
  );
};
export default Portfolio;
