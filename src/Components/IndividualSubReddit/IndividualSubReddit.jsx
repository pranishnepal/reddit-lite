import React from 'react';
import "./IndividualSubReddit.css";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {updateSubReddit} from "../../Store/RedditData";
import {FaReddit} from "react-icons/fa";


export const IndividualSubReddit = ({imgURL, subRedditName, applyActiveSubRedditStyling}) => {
    const dispatch = useDispatch();
    const subRedditStylingClassName = (applyActiveSubRedditStyling) ? "current-subreddit" : "individual-subreddit";

    const subRedditImg = (imgURL) ?
        (<img src={imgURL} alt="subreddit-icon" className="subreddit-icon"/>)
        : (<FaReddit className="default-subreddit-icon" size={35}/>);

    return (
        <div
            className={`${subRedditStylingClassName}`}
            onClick={() => dispatch(updateSubReddit(subRedditName))}
        >
            {subRedditImg}
            <p className="subreddit-name"> {subRedditName} </p>
        </div>
    );
}

IndividualSubReddit.propTypes = {
    subRedditName: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
}