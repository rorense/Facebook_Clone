import React, { useState } from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
// Importing Icons from Material UI
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


function Post() {

    // State hooks for input on the post input
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = e => {
        // Prevents refreshing
        e.preventDefault();

        // Implement database

        // Clears the field when user submits.
        setInput("");
        setImageUrl("");
    }

  return (
    <div className='post'>
        <div className='post__top'>
            <Avatar src="" />
            <form>
                <input 
                // adding state hook
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="post__input" placeholder="What's on your mind?"/>
                <input 
                // adding state hook
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder='Image URL (Optional)'/>
                <button onClick={handleSubmit} type='submit'>
                    Hidden Submit
                </button>
            </form>
        </div>
        {/* The bottom half the posting component */}
        <div className='post__bottom'>
            <div className='post__option'>
                <VideocamIcon style={{ color: "red" }}/>
                <h3>Live Video</h3>
            </div>

            <div className='post__option'>
                <PhotoLibraryIcon style={{ color: "green" }}/>
                <h3>Photo/Video</h3>
            </div>

            <div className='post__option'>
                <InsertEmoticonIcon style={{ color: "orange" }}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default Post