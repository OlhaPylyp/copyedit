import { React, lazy } from "react";

const HomePageView = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "HomePages" */)
);
const Service = lazy(() =>
  import("./pages/Services/Service" /* webpackChunkName: "Service" */)
);
const Portfolio = lazy(() =>
  import("./pages/Portfolio/Portfolio" /* webpackChunkName: "Portfolio" */)
);
const About = lazy(() =>
  import("./components/About/About" /* webpackChunkName: "About" */)
);

const routes = [
  {
    path: "/",
    label: "Home Page",
    component: HomePageView,
    exact: true,
  },
  {
    path: "/Service/",
    label: "Service",
    component: Service,
    // exact: true,
  },
  {
    path: "/Portfolio",
    label: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/About",
    label: "about me",
    component: About,
  },
];
export default routes;
