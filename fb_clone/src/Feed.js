import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <Post />
    </div>
  )
}

export default Feed;