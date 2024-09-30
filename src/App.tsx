import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import qs from "qs";
import "./sass/global.scss";
import Navigation from "./components/header/Navigation";


const App = () => {
  return (
    <>
      <Navigation></Navigation>
    </>
  );
}

export default App;
