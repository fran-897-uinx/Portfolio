import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const menubar = () => {
    let list = document.querySelector("ul");
    let close = document.querySelector("h6");
    let open = document.querySelector("h5");
    list.style.display = "block";
    open.style.display = "none";
    close.style.display = "block";
  };

  const nomenu = () => {
    let list = document.querySelector("ul");
    let close = document.querySelector("h6");
    let open = document.querySelector("h5");
    list.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
  };
  return (
    <div className="Navbar">
      <div className="name">
        <img src="./Assest/testmg1.jpg" alt="MY PIC" />
        <a href="">
          {" "}
          <h2>Francis David</h2>{" "}
        </a>
      </div>
      <div className="dropdown">
        <h5 onClick={menubar}>Menu</h5>
        <h6 onClick={nomenu}>Close</h6>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#project"> Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
