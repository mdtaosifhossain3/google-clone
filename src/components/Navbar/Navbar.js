import React from 'react';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href="https://mail.google.com/mail/?tab=rm&authuser=0&ogbl">Gmail</a>
      <a href="https://www.google.com.bd/imghp?hl=en&tab=ri&authuser=0&ogbl">
        images
      </a>
      <BsFillGrid3X3GapFill style={{ fontSize: "1.4rem", cursor: "pointer" }} />
      <RiAccountCircleFill style={{ fontSize: "3rem", cursor: "pointer" }} />
    </div>
  );
}

export default Navbar