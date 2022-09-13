import React, { useState } from "react";
import { AiOutlineMore, AiOutlineSearch } from "react-icons/ai";
import { BiImage, BiNews } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVideoLine } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import HeaderOptions from "../Result/HeaderOptions";

import "./Hamburger.css";
const Hamburger = () => {

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [visible, setVisible] = useState("hidden menuList");

  const clickedHandler = () => {
    if(!isMenuClicked) {
      setVisible("visible");
      console.log(isMenuClicked);
    }

    else{
      setVisible("hidden");
    }

    setIsMenuClicked(!isMenuClicked);
     console.log(isMenuClicked);
  }

  return (
    <div>
      <GiHamburgerMenu
        style={{ fontSize: "2rem", cursor: "pointer" }}
        onClick={clickedHandler}
      />
      <div className={visible}>
        <HeaderOptions title="All" Icon={AiOutlineSearch} />
        <HeaderOptions title="Images" Icon={BiImage} />
        <HeaderOptions title="News" Icon={BiNews} />
        <HeaderOptions title="Maps" Icon={SiGooglemaps} />
        <HeaderOptions title="Videos" Icon={RiVideoLine} />
        <HeaderOptions title="More" Icon={AiOutlineMore} />
      </div>
    </div>
  );
};

export default Hamburger;
