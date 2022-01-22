import React, {useState} from 'react';
import "./NavBar.css";
import {FaReddit, FaSearch} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {updateSearchTerm} from "../../Store/RedditData";

export const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        dispatch(updateSearchTerm(searchTerm));
        setSearchTerm("");
    }

    return (
        <nav className="container">
            <div className="logo-and-name">
                <FaReddit className="reddit-logo" size={35}/>
                <div className="logo-name"> Reddit<span>Lite</span></div>
            </div>
            <form className="input-form" onSubmit={handleSubmission}>
                <input
                    placeholder="Search"
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit"><FaSearch size={20}/></button>
            </form>
        </nav>
    );
}