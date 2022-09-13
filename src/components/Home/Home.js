import React from 'react';
import image from "../../images/google_logo.svg";
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <div>
          <img src={image} alt="Logo" />
        </div>
        <Search />
      </div>
    </div>
  );
}

export default Home