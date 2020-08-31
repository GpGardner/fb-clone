import React from 'react'
import './StoryCard.css'


import { Avatar } from '@material-ui/core'


function StoryCard({image, profilePic, title}) {


	return (
		<div style={{backgroundImage: `url(${image})`}} className='storyCard'>
			<Avatar className="storyCard-Avatar" src={profilePic}/>
			<h4>{title}</h4>
		</div>
	)
}

export default StoryCard
