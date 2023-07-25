// Type 'rfce' for react template
import React from 'react';
import './Header.css';
// Importing required components from Material UI
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StoreIcon from '@mui/icons-material/Store';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Header component focuses on the top part of the web app and is split into 3 different sections.
function Header() {
  return (
    <div className='header'>

        {/* The header left component includes the facebook logo and the searchbar */}
        <div className='header_left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt=""/>
            <div className='header_input'>
                <SearchIcon />
                <input type='text' />
            </div>
        </div>

         {/* The header middle part includes all the clicklable links that the user can interact with
            including the home, flag, subscribed accounts, store and profile */}
        <div className='header_middle'>
            <div className='header_option'>
                <HomeIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <FlagIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <SubscriptionsIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <StoreIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                <SupervisedUserCircleIcon fontSize='large'/>
            </div>
        </div>

        <div className='header_right'>
            <div className='header_info'>
                <Avatar src="" />
                <h4>Ryan Orense</h4>
            </div>
            {/* Using Icon button for clickable elements */}
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
            
        </div>
    </div>
  )
}

export default Header;