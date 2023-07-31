import React, { useEffect, useState } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import Post from './Post';
import Timeline from './Timeline';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  // Connecting to the database
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', "desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({ 
        id: doc.id, 
        data:doc.data( )})))
    ))
  }, [])

  return (
    <div className='feed'>
        <StoryReel />
        <Post />
        
        {/* Mapping each post from database  */}
        { posts.map(post => (
          <Timeline
            key={post.data.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ) )}

    </div>
  );
}

export default Feed;