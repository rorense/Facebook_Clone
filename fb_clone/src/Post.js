import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
// Importing Icons from Material UI
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


function Post() {

    const handleSubmit = e => {
        // Prevents refreshing
        e.preventDefault();
    }

  return (
    <div className='Post'>
        <div className='post__top'>
            <Avatar src="" />
            <form>
                <input className="post__input" placeholder="What's on your mind?"/>
                <input placeholder='Image URL (Optional)'/>
                <button onClick={handleSubmit} type='submit'>
                    Hidden Submit
                </button>
            </form>
        </div>

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