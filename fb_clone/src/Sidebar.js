// "rfce" for template
import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
// Importing icons from Material UI
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// Sidebar component
function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Side bar just consists of repeating elements so I'll be using repeating react component */}
        <SidebarRow src="https://scontent.fakl2-1.fna.fbcdn.net/v/t1.6435-9/74615519_2729679913717289_746247698641846272_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=s8aK4GGi4gIAX-F7tyF&_nc_ht=scontent.fakl2-1.fna&oh=00_AfAYK1GF_iGTGlhZBKHTM4AOGIAK7B3TUqAT5xiwDs8o8w&oe=64E81357" 
        title="Ryan Orense" />
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon}title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreIcon} title="More"/>
    </div>
  )
}

export default Sidebar;