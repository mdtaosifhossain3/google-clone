import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ACTIONS, useResultSlice } from "../../ContextAPI/useResultSlice";
import './Search.css';
function Search() {
  const [searchData, setsearchData] = useState("");
  const [result, dispatch] = useResultSlice();

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const api =
      await axios.get(`https://www.googleapis.com/customsearch/v1?key=${
        process.env.REACT_APP_API_KEY
      }&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${
        searchData && searchData
      }
      `);


      //Grab the whole data
       dispatch({
         type: ACTIONS.SEARCH_RESULT,
         payload: api.data,
       });


      //  Navigate to Result Page
       navigate(`/result/${searchData}`);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputBar">
        <AiOutlineSearch style={{ cursor: "pointer" }} />
        <input
          type="text"
          placeholder="Search Here..."
          value={searchData}
          onChange={(e) => setsearchData(e.target.value)}
        />

        <BsFillMicFill style={{ cursor: "pointer" }} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Search