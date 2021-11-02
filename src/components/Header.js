import React from "react";
import styles from "../App.css";
import { Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import routes from "../routes";
const Header = () => (
  <div>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          exact
          to="/"
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          HomePage
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to="/Services"
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Услуги
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to="/Portfolio"
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Портфолио
        </NavLink>
      </li>
    </ul>
    <Suspense fallback={<p>Is loading....</p>}>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </Suspense>
  </div>
);
export default Header;
