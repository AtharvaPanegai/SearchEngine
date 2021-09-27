/** @format */

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// icons
// import { AiOutlineAppstore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Search from "../components/Search";

function Home() {
  return (
    <div className='home'>
      <div className='homeHeader'>
        <div className='headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <FaUserAlt className='icon' size='20px' />
          {/* Image */}
        </div>
      </div>
      <div className='homeBody'>
        <img
          src='https://prescribedhealth.in/wp-content/uploads/2021/09/Search-1.png'
          alt='Search.com'
        />
        <div className = "homeInputContainer">
            <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
