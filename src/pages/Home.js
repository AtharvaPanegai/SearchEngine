/** @format */

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// icons
import { AiOutlineAppstore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Search from "../components/search";

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
          src='https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
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
