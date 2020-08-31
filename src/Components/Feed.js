import React from "react";
import "./Feed.css";
import StoryBoard from "./StoryBoard";
import CreatePost from "./CreatePost";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryBoard />

      <CreatePost />

      <Post
				className="post"
				image="https://nhl.bamcontent.com/images/photos/306559424/1024x576/cut.jpeg"
        username="George"
        message="Well, theres always next year"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
