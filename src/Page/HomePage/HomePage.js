import React from "react";
import "./HomePage.scss";
import Directory from "../../Component/Directory/Directory";
import { useMatch } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default HomePage;
