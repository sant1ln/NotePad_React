import React from "react";
import "./style/home.css";
import Header from "../components/Header";

const Home = () => {
  const about = "Weibo Food";
  return (
    <div className="main">
      <Header title={about} />
    </div>
  );
};

export default Home;
