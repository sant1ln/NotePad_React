import React from "react";
import {Link} from 'react-router-dom'
import './style/header.css'

const header = ({ title }) => {
  return (
    <header className="container">
      <div className="container_title">
        <h1>{title}</h1>
      </div>
      <div className="container_links">
        <Link to="/menu">Menu</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default header;
