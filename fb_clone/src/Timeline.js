import React from 'react';
import './Timeline.css';
import { Avatar } from '@mui/material';
// Importing icons from Material UI
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// For the timeline component which will show the post
function Timeline({ profilePic, image, username, timestamp, message}) {
  return (
    <div className='timeline'>
        {/* The top part of the timeline post */}
        <div className='timeline__top'>
            <Avatar src={ profilePic } className='timeline__avatar' />
            <div className='timeline__topInfo'>
                <h3>{ username }</h3>
                <p>Timestamp...</p>
            </div>
        </div>

        {/* The middle message part of timeline post */}
        <div className='timeline__bottom'>
            <p>{ message }</p>
        </div>

        {/* The bottom image part of the timeline post */}
        <div className='timeline__image'>
            <img src={image} alt=""/>
        </div>

        {/* Interaction options with different user at the bottom */}
        <div className='timeline__options'>
            <div className='timeline__option'>
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className='timeline__option'>
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>
            <div className='timeline__option'>
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className='timeline__option'>
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className='timeline__option'>
                <AccountCircleIcon />
                <ExpandMoreIcon />
            </div>
      
        </div>
    </div>
  )
}

export default Timeline