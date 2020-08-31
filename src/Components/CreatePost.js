import React, { useState } from "react";
import "./CreatePost.css";
import { Avatar } from "@material-ui/core";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";

function CreatePost() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{user}, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
		console.log(`input: ${input}, image url: ${imageUrl}`)

		// handle all of the DB logic
		
    setInput('');
    setImageUrl('');
  };


  return (
    <div className="createPost">
      <div className="createPost-top">
        <Avatar src={user.photoURL}/>
        <form onSubmit={handleSubmit}>
          <input
						value={input}
						onChange={e => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName} ?`}
            className="createPost-input"
          />
          <input value={imageUrl} onChange={e => setImageUrl(e.target.value)}placeholder="Image URL" className="createPost-input" />
          <button className="createPost-button"></button>
        </form>
      </div>
      <div className="createPost-bottom">
        <div className="createPost-option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="createPost-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="createPost-option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
