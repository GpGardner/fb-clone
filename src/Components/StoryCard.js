import React from 'react'
import './StoryCard.css'


import { Avatar } from '@material-ui/core'


function StoryCard({image, profileSrc, title}) {


	return (
		<div style={{backgroundImage: `url(${image})`}} className='storyCard'>
			<Avatar className="storyBoard-Avatar" src={profileSrc}/>
			<h4>{title}</h4>
		</div>
	)
}

export default StoryCard
