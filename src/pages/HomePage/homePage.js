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
            <button className={styles.btn}>Обо мне</button>
          </div>
        </section>
        <section>
          <div className={styles.poster}>
            <h2 className={styles.title}>Коротко обо мне</h2>
            <p>Lorem5 Lorem5 Lorem5 Lorem5 Lorem5 </p>
          </div>
        </section>
      </ContainerForHomepage>
    </div>
  );
}
export default HomePageView;
