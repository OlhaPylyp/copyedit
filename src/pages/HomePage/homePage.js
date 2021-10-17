import ContainerForHomepage from "../../components/ContainerForHomepage/ContainerForHomepage";

import styles from "../HomePage/homePage.module.css";
import FieldsList from "../../components/directionList/directionList";
import fields from "../../direction.json";
// import Header from "../../components/Header";

function HomePageView() {
  return (
    <div className={styles.bg}>
      {/* <Header /> */}
      <ContainerForHomepage>
        <section className={styles.homepage}>
          <div className={styles.poster}>
            <h1 className={styles.title}>Копирайтер с опытом более пяти лет</h1>
            <p>Lorem5 Lorem5 Lorem5 Lorem5 Lorem5 </p>
            <button className={styles.btn}>Обо мне</button>
          </div>
        </section>
        <section>
          <FieldsList fields={fields} />
        </section>
      </ContainerForHomepage>
    </div>
  );
}
export default HomePageView;
