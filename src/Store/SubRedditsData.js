import {createSlice} from "@reduxjs/toolkit";
import {fetchSubReddits} from "../Api/RedditApi";

const initialState = {
    subReddits: [],
    isLoading: false,
    hasError: false,
};

const subRedditSlice = createSlice({
    name: "subreddits",
    initialState: initialState,
    reducers: {
        subRedditFetchPending: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        subRedditFetchFulFilled: (state, action) => {
            state.isLoading = false;
            state.subReddits = action.payload;
        },
        subRedditFetchRejected: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const {
    subRedditFetchPending,
    subRedditFetchFulFilled,
    subRedditFetchRejected,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

// Async action creator thunk
export const subRedditsFetch = () => {
    return async (dispatch, getState) => {
        dispatch(subRedditFetchPending());
        try {
            const subReddits = await fetchSubReddits();
            dispatch(subRedditFetchFulFilled(subReddits));
        } catch (err) {
            dispatch(subRedditFetchRejected());
        }
    }
}