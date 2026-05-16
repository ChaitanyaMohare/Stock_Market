import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="main-container">
        <Menu />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
