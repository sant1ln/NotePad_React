import React from "react";
import { ListOfNotes } from "../components/ListOfNotes";
import { Search } from "../components/Search";
import { Sidebar } from "../components/Sidebar";
import { useData } from "../Hooks/useData";

import "../styles/containers/home.css";

export const Home = () => {
  const { actualState } = useData();
  return (
    <div className="main">
      <div className={`${(actualState === 'showing')? 'overide' : ''}`}></div>
      <Sidebar />
      <div className="main-content">
        {/* <Search /> */}
        <div className="main-content-list">
          <ListOfNotes />
        </div>
      </div>
    </div>
  );
};
/*  */
