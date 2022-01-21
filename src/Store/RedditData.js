import {fetchRedditPosts} from "../Api/RedditApi";
import {createSlice} from "@reduxjs/toolkit";

/* state for `redditDataSlice` */
const initialState = {
    subReddit: "r/memes/",
    posts: [],
    isLoading: false,
    hasError: false,
};

const redditDataSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        postsFetchPending: (state, action) => {
            console.log("Fetch started");
            state.isLoading = true;
            state.hasError = false;
        },
        postsFetchFulfilled: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        postsFetchRejected: (state, action) => {
            state.hasError = true;
            state.isLoading = false;
        },
    }
});

export const {
    postsFetchPending,
    postsFetchFulfilled,
    postsFetchRejected,
} = redditDataSlice.actions;

export default redditDataSlice.reducer;

// Async Action Creator Thunk
export const postsFetch = (subRedditName) => {
    return async (dispatch, getState) => {
        dispatch(postsFetchPending());
        try {
            const posts = await fetchRedditPosts(subRedditName);
            dispatch(postsFetchFulfilled(posts));
        } catch (err) {
            console.error(JSON.stringify(err));
            dispatch(postsFetchRejected());
        }
    }
}

// Selector functions
export const selectRedditData = (state) => state.redditData;