import React from 'react';
import "./NavBar.css";
import {FaReddit, FaSearch} from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav className="container">
            <div className="logo-and-name">
                <FaReddit className = "reddit-logo" size={40}/>
                <div className="logo-name"> Reddit<span>Lite</span></div>
            </div>
            <form className="input-form">
                <input placeholder= "Search" type="text"/>
                <button><FaSearch size={20}/></button>
            </form>
        </nav>
    );
}