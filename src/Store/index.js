import redditDataReducer from "./RedditData";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
   reducer: {
       /* App States */
       redditData: redditDataReducer,
   }
});

