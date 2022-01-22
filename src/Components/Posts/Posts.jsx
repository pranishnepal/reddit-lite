import React, {useEffect} from 'react';
import {PostCard} from "../PostCard/PostCard";
import "./Posts.css";
import {useDispatch, useSelector} from "react-redux";
import {postsFetch, updateSearchTerm} from "../../Store/RedditData";
import {Rings} from "react-loader-spinner";
import "./Posts.css";
import {shortenNumberToUnit} from "../../Utils/NumberUnitConverter";
import moment from "moment";
import {selectFilteredPosts, selectRedditData} from "../../Store";

export const Posts = () => {
    const dispatch = useDispatch();
    const redditData = useSelector(selectRedditData);
    const {selectedSubReddit, isLoading, hasError} = redditData;
    const subRedditName = selectedSubReddit;
    const posts = useSelector(selectFilteredPosts);

    useEffect(() => {
        /* Call the async-thunk action creator with appropriate subreddit */
        dispatch(postsFetch(subRedditName));
    }, [subRedditName]);

    /* API data being fetched */
    if (isLoading) {
        return (
            <Rings color="#FF5700" height={800} width={800}/>
        );
    }

    if (hasError) {
        /* API data fetch unsuccessful */
        return (
            <div className="error-message">
                <h1>API Fetch failed :(</h1>
                <button className="error-button" onClick={() => dispatch(postsFetch())}>
                    Try again!
                </button>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="error-message">
                <h3>No matching posts found for "{redditData.searchTerm}" 😔 </h3>
                <button className="error-button" onClick={() => dispatch(updateSearchTerm(""))}>
                    Home
                </button>
            </div>
        )
    }

    return (
        <div>
            {
                posts.map((item) => {
                    return (
                        <PostCard
                            key={item.id}
                            postedTimeAgo={moment.unix(item.created_utc).fromNow()}
                            imgURL={item.url_overridden_by_dest}
                            authorUserName={item.author}
                            postTitle={item.title}
                            score={shortenNumberToUnit(item.ups, 1)}
                        />
                    )
                })
            }
        </div>
    );

}