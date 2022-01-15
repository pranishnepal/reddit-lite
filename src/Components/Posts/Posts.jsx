import React from 'react';
import {PostCard} from "../PostCard/PostCard";
import "./Posts.css";

export const Posts = () => {
    return (
      <div>
          <PostCard/>
          <PostCard/>
          <PostCard/>
      </div>
    );
}