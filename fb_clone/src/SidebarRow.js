// "rfce" for template
import React from 'react'
import './SidebarRow.css';
import { Avatar } from '@mui/material';

// Prop elements lets you pass on variables to components
function SidebarRow({ src, Icon, title }) {
  return (
    <div className='sidebarRow'>
        {/* && symbol indicates an "if" statement
        If src or Icon exists then display*/}
        { src && <Avatar src={src}/> }
        { Icon && <Icon />}
        <h4>{ title }</h4>
    </div>
  )
}

export default SidebarRow;