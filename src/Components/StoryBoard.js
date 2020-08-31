import React, { useEffect, useState } from 'react'
import StoryCard from './StoryCard'
import './StoryBoard.css'
import db from '../firebase';

function StoryBoard() {

	const [stories, setStories] = useState([]);

	useEffect(() => {
    db.collection("storyBoard")
      .onSnapshot(snapshot => (
        setStories(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      ))
	}, []);

	return (
		<div className='storyBoard'>
			{stories.map(story => (
					<StoryCard key={story.id} title={story.data.title} image={story.data.image} profilePic={story.data.profilePic} />
			))}
		</div>
	)
}

export default StoryBoard
