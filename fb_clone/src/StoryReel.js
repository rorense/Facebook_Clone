import React from 'react'
import "./StoryReel.css"
import Story from './Story'

// The top part of the webpage, the story reel section.
function StoryReel() {
  return (
    <div className='storyReel'>
        <Story image="https://cdn.shopify.com/s/files/1/0070/7032/files/ig-story-letters-decorations.png?format=webp&v=1651857282"
        profileSrc="https://randomuser.me/api/portraits/women/55.jpg"
        title="Fluffy" />

        <Story image="https://cdn.shopify.com/s/files/1/0070/7032/files/mix-fonts.png?format=webp&v=1651857316"
        profileSrc="https://randomuser.me/api/portraits/men/70.jpg"
        title="Liam Crawford" />

        <Story image="https://cdn.shopify.com/s/files/1/0070/7032/files/image8_4f6766c7-317d-4958-8ffa-592987ad241b.png?format=webp&v=1651857365"
        profileSrc="https://randomuser.me/api/portraits/men/85.jpg"
        title="On Sale" />

        <Story image="https://cdn.shopify.com/s/files/1/0070/7032/files/text-backdrop.png?format=webp&v=1651857402"
        profileSrc="https://randomuser.me/api/portraits/men/8.jpg"
        title="Station" />

        <Story image="https://cdn.shopify.com/s/files/1/0070/7032/files/multiple-photos.png?format=webp&v=1651857478"
        profileSrc="https://randomuser.me/api/portraits/lego/3.jpg"
        title="Yummy" />
    </div>
  )
}

export default StoryReel