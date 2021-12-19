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
    isProtected: false,
  },
  {
    path: "/Service/",
    label: "Услуги",
    component: Service,
    isProtected: false,
    // exact: true,
  },
  {
    path: "/Portfolio/",
    label: "Портфолио",
    component: Portfolio,
    exact: true,
    isProtected: false,
  },
  {
    path: "/Portfolio/:id",
    label: "Portfolio Details",
    component: PortfolioDetails,
    isProtected: true,
  },
];
export default routes;
