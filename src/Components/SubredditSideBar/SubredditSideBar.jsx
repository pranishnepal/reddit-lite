import React, {useEffect} from 'react';
import "./SubredditSideBar.css";
import {IndividualSubReddit} from "../IndividualSubReddit/IndividualSubReddit";
import {useDispatch, useSelector} from "react-redux";
import {selectSubRedditData} from "../../Store";
import {subRedditsFetch} from "../../Store/SubRedditsData";
import {Rings} from "react-loader-spinner";

export const SubredditSideBar = () => {
    const dispatch = useDispatch();
    const subRedditData = useSelector(selectSubRedditData);
    const {isLoading, hasError, subReddits} = subRedditData;

    useEffect(() => {
        dispatch(subRedditsFetch());
    }, [subReddits.length]);

    if (isLoading) {
        return (
            <Rings color="#FF5700" height={100} width={100}/>
        );
    }

    return (
        <div className="sidebar-container">
            <h3><span>Sub</span>reddits</h3>
            {
                subReddits.map((subReddit) => {
                    return (
                        <IndividualSubReddit
                            subRedditName={subReddit.display_name_prefixed}
                            imgURL={subReddit.icon_img}
                        />
                    )
                })
            }
        </div>
    );
}