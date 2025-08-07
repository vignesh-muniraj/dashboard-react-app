import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  <h1>Welcome to Dashlead 🎉🎉🎊⭐</h1>
  return (
    <div className="App">
      <StackBoard />
      <StackBoard />
      <StackBoard />
      <StackBoard />
     
    </div>
  );
};

export default App;

function datas(){
  const data = [
    {
      title : "Number Of Sales",
      
    }
  ]
}
function StackBoard() {
  return (
    <div className="stackboard-container">
    <div className="title">
    <h3>Number Of Sales</h3>
        <h2>↗️</h2>
      </div>
      <h1>568</h1>
      <div className="progress-clr">
      <div className="first-value"></div>
      <div className="second-value"></div>
      </div>
      <div className="month"><h2>Last Month</h2>
       <h3>⬆️0.7%</h3>
      </div>
    </div>
  );
}

