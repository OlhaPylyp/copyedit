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
const PortfolioDetails = lazy(() =>
  import("./components/portfolioDetails/About" /* webpackChunkName: "About" */)
);

const routes = [
  {
    path: "/",
    label: "HomePage",
    component: HomePageView,
    exact: true,
  },
  {
    path: "/Service/",
    label: "Услуги",
    component: Service,
    // exact: true,
  },
  {
    path: "/Portfolio/",
    label: "Portfolio",
    component: Portfolio,
  },
  // {
  //   path: "/Portfolio/:id",
  //   label: "Portfolio Details",
  //   component: PortfolioDetails,
  // },npm start
  // {
  //   path: "/About",
  //   label: "about me",
  //   component: About,
  // },
];
export default routes;
