/** @format */

import React, { useState } from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const searchFunction = (e) => {
    e.preventDefault();
    console.log("You hit the search Button");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className='search'>
      <div className='searchInput'>
        <AiOutlineSearch className='searchInputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <BsMicFill />
      </div>
      {!hideButtons ? (
        <div className='searchButtons'>
          <Button type='submit' onClick={searchFunction} variant='outline-dark'>
            Leo Search
          </Button>
          <Button variant='outline-dark'>I'm Very Feeling Lucky</Button>
        </div>
      ) : (
        <div className='searchButtons'>
          <Button
            className='buttonsHidden'
            type='submit'
            onClick={searchFunction}
            variant='outline-dark'>
            LeoSearch
          </Button>
          <Button className='buttonsHidden' variant='outline-dark'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
