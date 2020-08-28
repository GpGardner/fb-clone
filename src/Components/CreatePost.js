import React from 'react'
import "./CreatePost.css"
import { Avatar } from '@material-ui/core'

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
				{/* Live Video */}
				{/* Photo Video */}
				{/* Feeling Activity */}
			</div>

		</div>
	)
}

export default CreatePost
