import redditDataReducer from "./RedditData";
import subRedditDataReducer from "./SubRedditsData";
import {configureStore, createSelector} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        /* App States */
        redditData: redditDataReducer,
        subRedditData: subRedditDataReducer,
    }
});

/* Selector functions */
export const selectRedditData = (state) => state.redditData;
export const selectSubRedditData = (state) => state.subRedditData;


const selectRedditPosts = (state) => state.redditData.posts;
const selectSearchTerm = (state) => state.redditData.searchTerm;

/*  Combining posts selector and search term selector into one, for filtering.
    If search term is provided, the selector `filteredPosts` returns the posts matching the term.
    If not, it returns all the posts fetched from API.
 */
export const selectFilteredPosts = createSelector(
    [selectRedditPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== "") {
            return posts.filter((post) => {
                return post.title.toLowerCase().includes(searchTerm.toLowerCase());
            });
        }

        return posts;
    }
)