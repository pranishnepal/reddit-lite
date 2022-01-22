import {fetchRedditPosts} from "../Api/RedditApi";
import {createSlice} from "@reduxjs/toolkit";

/* state for `redditDataSlice` */
const initialState = {
    selectedSubReddit: "r/pics",
    posts: [],
    isLoading: false,
    hasError: false,
    searchTerm: "",
};

const redditDataSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        postsFetchPending: (state, action) => {
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
        updateSubReddit: (state, action) => {
            state.selectedSubReddit = action.payload;
        },
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    }
});

export const {
    postsFetchPending,
    postsFetchFulfilled,
    postsFetchRejected,
    updateSubReddit,
    updateSearchTerm
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


