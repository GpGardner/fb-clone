import React from 'react'
import "./Comment.css"
import { Avatar } from '@material-ui/core'

function Comment({commenterProfilePic, commenterName, commenterMessage}) {
	return (
		<div className="comment">
			<Avatar src={commenterProfilePic} />
			<div className="commentBubble">
				<h3>{commenterName}</h3>
				<p>{commenterMessage}</p>
			</div>
		</div>
	)
}

export default Comment
