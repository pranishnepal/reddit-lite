import React from 'react';
import "./PostCard.css";
import {BiUpvote, BiDownvote} from "react-icons/bi";
import PropTypes from "prop-types";

export const PostCard = ({imgURL, postTitle, authorUserName, postedTimeAgo, score}) => {
    return (
        <div className="post-container">
            {/* Up-vote and down-vote: R1 */}
            <div>
                <div className="upvote-downvote">
                    <BiUpvote size={25} className="upvote"/>
                    <p>{score}</p>
                    <BiDownvote size={25} className="downvote"/>
                </div>

                {/* Post: R1 */}
                <div className="post">
                    <h3>{postTitle}</h3>
                </div>
            </div>

            {/* Image: R2 */}
            <div className="post-image">
                <img src={imgURL}/>
            </div>

            {/* Author and Post Time: R3 */}
            <div className="op-and-time">
                <p id="author">{`u/${authorUserName}`}</p>
                <p id="time">{postedTimeAgo}</p>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    imgURL: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
    authorUserName: PropTypes.string.isRequired,
    postedTimeAgo: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
}
