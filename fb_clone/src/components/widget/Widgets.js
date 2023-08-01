import React from 'react';

// Widget is basically and "I-frame", a snippet of a webpage.
function Widgets() {
  return (
    // Get it from facebook embed
    <div className='widgets'>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnzherald.co.nz%2Fposts%2Fpfbid0Xqj4fxjgFDqk2azQfRvtnEKvjw27dpHby8d6yoPsDYS5yjBmU7WRfBDhFS3HhML6l&show
        _text=true&width=340" 
        title="facebook embedded"
        width="340" 
        height="100%" 
        style={{border:"none", overflow:"hidden"}} 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default Widgets