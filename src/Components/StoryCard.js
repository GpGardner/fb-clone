import React from 'react'
import { Avatar } from '@material-ui/core'

function StoryCard({image, profileSrc, title}) {


	return (
		<div className='storyCard'>
			<img src={image} alt=""/>
			<Avatar src={profileSrc}/>
			<h4>{title}</h4>
		</div>
	)
}

export default StoryCard
