import React from 'react';
import "./SubredditSideBar.css";

export class SubredditSideBar extends React.Component {

    render() {
        const imgSrc = "https://styles.redditmedia.com/t5_2rm4d/styles/communityIcon_g31qvzfr2gj71.png?width=256&s=c4366ef6c52ec597058a05b5f490d504e314488d";

        return (
            <div className="sidebar-container">
                <h3><span>Sub</span>reddits</h3>

                <div className="individual-subreddit current-subreddit">
                    <img src = {imgSrc} alt = "subreddit-icon" className="subreddit-icon"/>
                    <p className="subreddit-name"> Home </p>
                </div>


                <div className="individual-subreddit">
                    <img src = {imgSrc} alt = "subreddit-icon" className="subreddit-icon"/>
                    <p className="subreddit-name"> Home </p>
                </div>
                <div className="individual-subreddit">
                    <img src = {imgSrc} alt = "subreddit-icon" className="subreddit-icon"/>
                    <p className="subreddit-name"> Home </p>
                </div>
                <div className="individual-subreddit">
                    <img src = {imgSrc} alt = "subreddit-icon" className="subreddit-icon"/>
                    <p className="subreddit-name"> Home </p>
                </div>
                <div className="individual-subreddit">
                    <img src = {imgSrc} alt = "subreddit-icon" className="subreddit-icon"/>
                    <p className="subreddit-name"> Home </p>
                </div>


            </div>
        );
    }
}