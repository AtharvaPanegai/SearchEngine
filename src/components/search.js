/** @format */

import React, { useState } from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();

  const searchFunction = (e) => {
    e.preventDefault();
    console.log("You hit the search Button");
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
            Google Search
          </Button>
          <Button variant='outline-dark'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='searchButtons'>
          <Button className = "buttonsHidden" type='submit' onClick={searchFunction} variant='outline-dark'>
            Google Search
          </Button>
          <Button className = "buttonsHidden" variant='outline-dark'>I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
