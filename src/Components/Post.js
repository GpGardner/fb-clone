import React, { useState } from 'react'
import './Post.css'
import db from '../firebase'
import { useStateValue } from '../StateProvider'

import Avatar from '@material-ui/core/Avatar'
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import NearMeIcon from "@material-ui/icons/NearMe"
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"




function Post({profilePic, image, username, timestamp, message, numLikes, id}) {
	const [{ user }, dispatch] = useStateValue();
	const [likes, setLikes] = useState([...numLikes]);

	const toggleLike = () => {
		if(!likeCheck()){
			db.collection('posts').doc(id).update({
				numLikes: [...numLikes, user.email],
			})
			setLikes([...likes, user.email]);
		}else {
			db.collection('posts').doc(id).update({
				numLikes: numLikes.filter((email) => email !== user.email)
			})
			setLikes(likes.filter((email) => email !== user.email))
		}
	}

	const likeCheck = () => {
			return (likes.includes(user.email));
	}

	// console.log(likeCheck());

	return (
		<div className="post">
			<div className="post-top">
				<Avatar src={profilePic}
				className="post-avatar"/>
				<div className="post-topInfo">
					<h3>{username}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>

			<div className="post-bottom">
				<p>{message}</p>
			</div>

			{image ? (<div className="post-image">
				<img src={image} alt="users provided"/>
			</div>): null}
			
			<div className="post-options">
				<div className={`post-optionLike ${ likeCheck() ? "post-optionLikeActive" : null}`} onClick={toggleLike}>
					<ThumbUpIcon />
					<p className={"post-buttonText"}>
						{ numLikes.length > 0 ? (`${numLikes.length} Like(s)`) : "Like"} 
						</p>
				</div>
				<div className="post-option">
					<ChatBubbleOutlineIcon />
					<p className="post-buttonText">Comment</p>
				</div>
				<div className="post-option">
					<NearMeIcon />
					<p className="post-buttonText">Share</p>
				</div>
				<div className="post-option">
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>

		</div>
	)
}

export default Post;
