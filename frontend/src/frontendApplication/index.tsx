import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HomeComponent from "./Components/Home";
import Index from "./Components/Home/home";

const Home = () => {
  const { pathname } = useLocation();
  const indexPage = pathname === "/";

  return (
    <React.StrictMode>
      {indexPage ? (
        <Index />
      ) : (
        <HomeComponent>
          <Outlet />
        </HomeComponent>
      )}
    </React.StrictMode>
  );
};

export default Home;
