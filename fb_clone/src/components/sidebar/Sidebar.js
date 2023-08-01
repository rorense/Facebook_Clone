// "rfce" for template
import React from 'react';
import SidebarRow from './SidebarRow';
import '../../assets/Sidebar.css';
// Importing icons from Material UI
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useStateValue } from '../../context_api/StateProvider';

// Sidebar component
function Sidebar() {
  // Pulling in user information
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='sidebar'>
        {/* Side bar just consists of repeating elements so I'll be using repeating react component */}
        <SidebarRow src={ user.photoURL} 
        title={ user.displayName } />
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