/** @format */

import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";

function SearchPage() {
  const [{term }, dispatch] = useStateValue();
  const {data} = useGoogleSearch(term);
//   2.24.21

    console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPageHeader'>
          <h1> {term} </h1>
      </div>
      <div className='searchPageResults'></div>
    </div>
  );
}

export default SearchPage;
