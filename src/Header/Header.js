import React from "react";
import styles from "./Header.module.css";
import { createUseStyles } from "react-jss";
import { Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import routes from "../routes";

const useStyles = createUseStyles({
  active: {
    color: "green",
  },
});
const checkShowPage = (isProtected) => {
  const showProtected = !isProtected;

  return showProtected;
};
const Header = () => {
  const style = useStyles();
  return (
    <header className={styles.page_header}>
      <div className={styles.container && styles.header_container}>
        <NavLink
          exact
          to="/"
          className={styles.logo}
          activeClassName={style.active}
        >
          LOGO
        </NavLink>
        <div className={styles.header_menu}>
          <nav className={styles.navigation}>
            <ul className={styles.siteNav}>
              {routes.map(({ path, exact, label, isProtected }) => {
                const show = checkShowPage(isProtected);
                return show ? (
                  <li className={styles.item}>
                    <NavLink
                      key={path}
                      to={path}
                      className={styles.siteNavLink}
                      activeClassName={style.active}
                      exact={exact}
                    >
                      {label}
                    </NavLink>
                  </li>
                ) : null;
              })}
              {/* <li className={styles.item}>
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
            </li> */}
            </ul>
          </nav>

          <ul className={styles.header_adr}>
            <li className={styles.item && styles.header_adr_item}>
              <a
                className={styles.link && styles.header_adr_link}
                href="mailto:masha@mail.com<"
              >
                masha@mail.com
              </a>
            </li>
            <li className={styles.item && styles.header_adr_item}>
              <a
                className={styles.link && styles.header_adr_link}
                href="tel:+380669866466<"
              >
                +380669866466
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
