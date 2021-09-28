/** @format */

import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
// icons
import {
  AiFillPlaySquare,
  AiOutlineMore,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { BsImage } from "react-icons/bs";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // Live API CALL
  // const {data} = useGoogleSearch(term);

  const data = Response;

  console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPageHeader'>
        <Link to='/'>
          <img
            className='searchPageLogo'
            src='https://prescribedhealth.in/wp-content/uploads/2021/09/Search-2.png'
            alt='Search.com'
          />
        </Link>
        <div className='searchPageHeaderBody'>
          <Search hideButtons />
          <div className='searchPageOptions'>
            <div className='searchPageOptionsLeft'>
              <div className='searchPageSingleOption'>
                <AiOutlineSearch
                  color='gray'
                  size='20px'
                  className='searchInputIcon'
                />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPageSingleOption'>
                <AiFillPlaySquare
                  color='gray'
                  size='17'
                  className='searchInputIcon'
                />
                <Link to='/Videos'>Videos</Link>
              </div>
              <div className='searchPageSingleOption'>
                <SiGooglemaps
                  color='gray'
                  size='20px'
                  className='searchInputIcon'
                />
                <Link to='/Maps'>Maps</Link>
              </div>
              <div className='searchPageSingleOption'>
                <BsImage color='gray' size='20px' className='searchInputIcon' />
                <Link to='/Images'>Images</Link>
              </div>
              <div className='searchPageSingleOption'>
                <MdDescription
                  color='gray'
                  size='20px'
                  className='searchInputIcon'
                />
                <Link to='/News'>News</Link>
              </div>
              <div className='searchPageSingleOption'>
                <AiOutlineMore
                  color='gray'
                  size='20px'
                  className='searchInputIcon'
                />
                <Link to='/More'>More</Link>
              </div>
            </div>
            <div className='searchPageOptionsRight'>
              <div className='searchPageSingleOption'>
                <Link to='/Tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='searchPageResults'></div>
    </div>
  );
}

export default SearchPage;
