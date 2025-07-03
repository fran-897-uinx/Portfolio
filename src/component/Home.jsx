import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <menu>
        <ul>
          <a href="">IN</a>
          <a href="">TW</a>
          <a href="">GIT</a>
          <a href="">CV</a>
        </ul>
      </menu>

      <div className="article">
        <h1>HEY, I'M FRANCIS DAVID </h1>
        <p>
          A Resulted-Oriented web Developer Buliding and managing Website and
          Web aplication that leads to the success of the overall product{" "}
        </p>
        <button>Project</button>

        <div className="scroll-down">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
