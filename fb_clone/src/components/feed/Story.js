import React from 'react';
import "../../assets/Story.css";
import { Avatar } from '@mui/material';

// Each individual storyreel element with 3 props passed in.
function Story({ image, profileSrc, title }) {
  return (
    // Using Inline CSS
    <div style={{ backgroundImage: `url(${image})`}} className='story'>
        <Avatar className='story__avatar' src={profileSrc} />
        <h4>{ title }</h4>
    </div>
  )
}

export default Story