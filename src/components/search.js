import React from 'react'
import "./search.css"
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";

function search() {
    return (
        <div className = "search">
            <div className = "searchInput">
                <AiOutlineSearch />
                <input />
                <BsMicFill />
            </div>
        </div>
    )
}

export default search
