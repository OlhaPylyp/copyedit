import React from "react";
import styles from "./Poster.module.css";
import { Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import routes from "../../routes";
const Poster = () => (
  <section className={styles.overlay}>
    <div className={styles.poster}>
      <h1 className={styles.title}>
        Копирайтер с опытом <br /> более пяти лет
      </h1>
      <p>Lorem5 Lorem5 Lorem5 Lorem5 Lorem5 </p>

      {/* <NavLink
        to="/About"
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        <button className={styles.btn}>Обо мне</button>
      </NavLink>
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))}
        </Switch>
      </Suspense> */}
    </div>
  </section>
);
export default Poster;
