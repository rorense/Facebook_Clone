import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import Post from './Post';
import Timeline from './Timeline';

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <Post />
        <Timeline />
    </div>
  )
}

export default Feed;