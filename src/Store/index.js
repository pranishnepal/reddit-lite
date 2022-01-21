import redditDataReducer from "./RedditData";
import subRedditDataReducer from "./SubRedditsData";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        /* App States */
        redditData: redditDataReducer,
        subRedditData: subRedditDataReducer,
    }
});

// Selector functions
export const selectRedditData = (state) => state.redditData;
export const selectSubRedditData = (state) => state.subRedditData;