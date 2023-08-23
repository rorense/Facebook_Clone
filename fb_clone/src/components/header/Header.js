// Type 'rfce' for react template
import React from 'react';
import '../../assets/Header.css';
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
import { useStateValue } from '../../context_api/StateProvider';

// Header_ component focuses on the top part of the web app and is split into 3 different sections.
function Header() {
    // Pulling user information
    const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>

        {/* The header_ left component includes the facebook logo and the searchbar */}
        <div className='header__left'>
            <img src="https://img.icons8.com/?size=512&id=7743&format=png" alt=""/>
            <div className='header__input'>
                <SearchIcon />
                <input type='text' placeholder='Search Facebook'/>
            </div>
        </div>

         {/* The header_ middle part includes all the clicklable links that the user can interact with
            including the home, flag, subscribed accounts, store and profile */}
        <div className='header__middle'>
            <div className='header__option header__option--active'>
                <HomeIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <FlagIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <SubscriptionsIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <StoreIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <SupervisedUserCircleIcon fontSize='large'/>
            </div>
        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar src={ user.photoURL } />
                <h4>{ user.displayName }</h4>
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

// Exporting to be used in app.js 
export default Header;