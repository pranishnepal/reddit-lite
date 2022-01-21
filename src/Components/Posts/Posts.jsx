import React, {useEffect} from 'react';
import {PostCard} from "../PostCard/PostCard";
import "./Posts.css";
import {useDispatch, useSelector} from "react-redux";
import {postsFetch, selectRedditData} from "../../Store/RedditData";
import {Rings} from "react-loader-spinner";
import "./Posts.css";
import {shortenNumberToUnit} from "../../Utils/NumberUnitConverter";
import moment from "moment";


export const Posts = () => {
    const dispatch = useDispatch();
    const redditData = useSelector(selectRedditData);
    const {subReddit, posts, isLoading, hasError} = redditData;
    const subRedditName = "r/memes";

    useEffect(() => {
        /* Call the async-thunk action creator with appropriate subreddit */
        dispatch(postsFetch(subRedditName));
    }, [subRedditName]);

    /* API data being fetched */
    if (isLoading) {
        return (
            <Rings color="#FF5700" height={800} width={800}/>
        );
    } else if (hasError) {
        /* API data fetch unsuccessful */
        return (
            <div>
                <h1>API Fetch failed :(</h1>
                <button className="error-button" onClick={() => dispatch(postsFetch())}>
                    Try again!
                </button>
            </div>
        )
    }

    return (
        <div>
            {
                posts.map((item) => {
                    const hasImageURL = item.url_overridden_by_dest;
                    if (hasImageURL) {
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
                    }
                })
            }
        </div>
    );

}