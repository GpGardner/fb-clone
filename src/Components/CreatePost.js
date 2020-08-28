import React from 'react'
import "./CreatePost.css"
import { Avatar } from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

function CreatePost() {


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('test');
	}



	return (
		<div className='createPost'>
			
			<div className="createPost-top">
				<Avatar />
				<form onSubmit={handleSubmit}>
					<input placeholder="What's on your mind?" className="createPost-input"/>
					<input placeholder="Image URL" className="createPost-input"/>
					<button className="createPost-button"></button>
				</form>
			</div>
			<div className="createPost-bottom">
				<div className="createPost-option">
					<VideoCamIcon style={{ color: "red" }}/>
					<h3>Live Video</h3>
				</div>
				<div className="createPost-option">
					<PhotoLibraryIcon style={{ color: "green" }}/>
					<h3>Live Video</h3>
				</div>
				<div className="createPost-option">
					<InsertEmoticonIcon style={{ color: "yellow" }}/>
					<h3>Live Video</h3>
				</div>
			</div>

		</div>
	)
}

export default CreatePost
