import React, {useState} from 'react';
import "./PostCard.css";
import {BiUpvote, BiDownvote} from "react-icons/bi";
import PropTypes from "prop-types";

export const PostCard = ({imgURL, postTitle, authorUserName, postedTimeAgo, score}) => {

    const [isUpVoteActive, setUpVoteActive] = useState(false);
    const [isDownVoteActive, setDownVoteActive] = useState(false);

    const handleUpVoteClick = () => {
        if (isDownVoteActive) {
            setDownVoteActive(false);
        }
        setUpVoteActive(!isUpVoteActive);
    }

    const handleDownVoteClick = () => {
        if (isUpVoteActive) {
            setUpVoteActive(false);
        }

        setDownVoteActive(!isDownVoteActive);
    }

    return (
        <div className="post-container">
            {/* Up-vote and down-vote: R1 */}
            <div>
                <div className="upvote-downvote">
                    <BiUpvote
                        size={25}
                        className={isUpVoteActive ? "upvote-clicked" : "upvote"}
                        onClick={handleUpVoteClick}
                    />
                    <p>{score}</p>
                    <BiDownvote
                        size={25}
                        className={isDownVoteActive ? "downvote-clicked" : "downvote"}
                        onClick={handleDownVoteClick}
                    />
                </div>

                {/* Post: R1 */}
                <div className="post">
                    <h3>{postTitle}</h3>
                </div>
            </div>

            {/* Image: R2 */}
            <div className="post-image">
                <img src={imgURL} id="post-img" onError={(event) => event.target.style.display = 'none'}/>
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
    imgURL: PropTypes.string,
    postTitle: PropTypes.string.isRequired,
    authorUserName: PropTypes.string.isRequired,
    postedTimeAgo: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
}
