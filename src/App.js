import React from "react";
import styles from "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
