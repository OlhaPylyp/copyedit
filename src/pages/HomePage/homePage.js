import ContainerForHomepage from "../../components/ContainerForHomepage/ContainerForHomepage";

import styles from "../HomePage/homePage.module.css";
// import Header from "../../components/Header";

function HomePageView() {
  return (
    <div className={styles.bg}>
      {/* <Header /> */}
      <ContainerForHomepage>
        <section className={styles.homepage}>
          <div className={styles.poster}>
            <h1 className={styles.title}>основной текст</h1>
            <p>Lorem5 Lorem5 Lorem5 Lorem5 Lorem5 </p>
          </div>
        </section>
      </ContainerForHomepage>
    </div>
  );
}
export default HomePageView;
