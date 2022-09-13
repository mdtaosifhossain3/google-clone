import React from 'react';
import { AiFillSetting, AiOutlineMore, AiOutlineSearch } from "react-icons/ai";
import { BiImage, BiNews } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { RiAccountCircleFill, RiVideoLine } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { Link } from 'react-router-dom';
import { useResultSlice } from '../../ContextAPI/useResultSlice';
import image from '../../images/google_logo.svg';
import Hamburger from '../Hamburger/Hamburger';
import Search from '../Search/Search';
import HeaderOptions from './HeaderOptions';
import './Result.css';


function Result() {
  const deta = useResultSlice();
  const totalResults = deta !== null ? deta[0].result.searchInformation : [];
  const result = deta !== null ? deta[0].result.items : [];


  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={image} alt="logo" />
        </Link>

        <div className="searchBar">
          <Search />
          <div className="links">
            <HeaderOptions title="All" Icon={AiOutlineSearch} />
            <HeaderOptions title="Images" Icon={BiImage} />
            <HeaderOptions title="News" Icon={BiNews} />
            <HeaderOptions title="Maps" Icon={SiGooglemaps} />
            <HeaderOptions title="Videos" Icon={RiVideoLine} />
            <HeaderOptions title="More" Icon={AiOutlineMore} />
          </div>
        </div>

        <div className="hamburger">
          <Hamburger />
        </div>

        <div className="other">
          <AiFillSetting
            style={{
              fontSize: "1.7rem",
              cursor: "pointer",
              marginLeft: "auto",
            }}
          />
          <BsFillGrid3X3GapFill
            style={{
              fontSize: "1.7rem",
              cursor: "pointer",
            }}
          />
          <RiAccountCircleFill
            className="avatar"
            style={{ fontSize: "3rem", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="searchPage__result">
        <div>
          <p className="searchPage__result__about">
            About{" "}
            <span>
              {totalResults?.formattedTotalResults} Results in{" "}
              <span>({totalResults?.formattedSearchTime}seconds)</span>
            </span>
          </p>
        </div>
        {result?.map((data) => (
          <div key={data.cacheId}>
            <div>
              <div>
                <p className="searchPage__result__url">{data.formattedUrl}</p>
                <h2 className="searchPage__result__title">
                  <a href={data.link}>{data.title}</a>
                </h2>
                <p className="searchPage__result__snippet">{data.snippet}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result