import React from "react";
import styles from "./Header.module.css";
// import { createUseStyles } from "react-jss";
import { Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import routes from "../routes";

// const useStyles = createUseStyles({});
const Header = () => {
  // const styles = useStyles();
  return (
    <header className={styles.page_header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <NavLink
            exact
            to="/"
            className={styles.NavLink && styles.logo}
            activeClassName={styles.NavLinkActive}
          >
            LOGO
          </NavLink>
          <ul className={styles.siteNav}>
            <li className={styles.item}>
              <NavLink
                exact
                to="/"
                className={styles.NavLink}
                activeClassName={styles.NavLinkActive}
              >
                MyHomePage
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
        </nav>

        <ul className={styles.siteAdr}>
          <li className={styles.item}>
            <a className={styles.link} href="mailto:masha@mail.com<">
              masha@mail.com
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="tel:+380669866466<">
              +380669866466
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
