import { React, lazy } from "react";

const HomePageView = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "HomePages" */)
);
const Service = lazy(() =>
  import("./pages/Services/Service" /* webpackChunkName: "MoviesPage" */)
);
const Portfolio = lazy(() =>
  import(
    "./pages/Portfolio/Portfolio" /* webpackChunkName: "MovieDetailsPage" */
  )
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
    exact: true,
  },
  {
    path: "/Portfolio",
    label: "Portfolio",
    component: Portfolio,
  },
  // {
  //   path: "/MoviesPage/:movieId",
  //   label: "Movie Details Page",
  //   component: MovieDetailsPage,
  // },
];
export default routes;
