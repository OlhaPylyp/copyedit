import React from "react";
import Header from "../../components/Header";
import ContainerForHomepage from "../../components/ContainerForHomepage/ContainerForHomepage";
import styles from "../HomePage/HomePage.module.css";
import Poster from "../../components/poster/Poster";
import FieldsList from "../../components/directionList/DirectionList";
import fields from "../../Jsone/copyedit.json";
import Footer from "../../components/Footer/Footer";
// import icons from "../../components/Icons/icons.svg";
// import Header from "../../components/Header";

function HomePageView() {
  return (
    <div>
      <ContainerForHomepage>
        <Poster />

        <FieldsList fields={fields} />

        <section className={styles.section}>
          <Footer name={fields} />
        </section>
      </ContainerForHomepage>
    </div>
  );
}
export default HomePageView;
