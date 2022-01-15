import React from 'react';
import "./PostCard.css";
import { BiUpvote, BiDownvote } from "react-icons/bi";

export const PostCard = () => {

    const post = "The new quarter featuring the likeness of the writer Maya Angelou";
    const totalVotes = "3.5k";
    const imageUrl = "https://preview.redd.it/n2g8totcf3b81.jpg?auto=webp&s=fdc5606b0b420802b5c297d63e365e794aab53d7";
    const author = "World-Tight";
    const timeAgo = "9 hours ago";

    return (
        <div className="post-container">
            {/* Up-vote and down-vote: R1 */}

            <div>
                <div className="upvote-downvote">
                    <BiUpvote size={25} className = "upvote"/>
                    <p>{totalVotes}</p>
                    <BiDownvote size={25} className = "downvote"/>
                </div>

                {/* Post: R1 */}
                <div className="post">
                    <h3>{post}</h3>
                </div>
            </div>

            {/* Image: R2 */}
            <div className="post-image">
                <img src = {imageUrl}/>
            </div>

            {/* Author and Post Time: R3 */}
            <div className="op-and-time">
                <p id = "author">{`u/${author}`}</p>
                <p id = "time">{timeAgo}</p>
            </div>
        </div>
    );
};
