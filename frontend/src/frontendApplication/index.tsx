import React from "react";
import { Outlet } from "react-router-dom";
import HomeComponent from "./Components/Home";
// import HomeComponent from "./Components/Home";
const Home = () => {
  return (
    <React.StrictMode>
      <HomeComponent>{<Outlet />}</HomeComponent>
    </React.StrictMode>
  );
};

export default Home;
