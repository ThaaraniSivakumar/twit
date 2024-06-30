import React, { useState } from "react";
import './Sidebar.css';
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleIcon from '@mui/icons-material/People';
import XIcon from '@mui/icons-material/X';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import CustomLink from './CustomLink.js'
import useLoggedInUser from "../../hooks/useLoggedInUser.js";
import { Button ,Avatar, IconButton,Menu,MenuItem, ListItemIcon, Divider} from "@mui/material";
const Sidebar = ({handleLogout,user}) =>{
    const [anchorEl,setAnchorEl]=useState(null);
    const openMenu=Boolean(anchorEl)
    const [loggedInUser]=useLoggedInUser();
    const userProfilePic= loggedInUser[0]?.profileImage?loggedInUser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
    const handleClick = e =>{
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () =>{
        setAnchorEl(null);
    }
    const result = user[0]?.email.split('@')[0]
    return(
      <div className="main-content">
        <div className="sidebar" >
        <XIcon className="sidebar_twitterIcon"/>
        <CustomLink to='/home/feed'>  <SidebarOptions  active Icon={HomeIcon} text='Home'/></CustomLink>
        <CustomLink to='/home/explore'> <SidebarOptions active Icon={SearchIcon} text='Explore'/></CustomLink>
        <CustomLink to='/home/notifications'> <SidebarOptions active Icon={NotificationsNoneIcon} text='Notifications'/></CustomLink>
        <CustomLink to='/home/messages'>  <SidebarOptions active Icon={MailOutlineIcon} text='Messages'/></CustomLink>
        <CustomLink to='/home/bookmarks'> <SidebarOptions active Icon={BookmarkBorderIcon} text='Bookmarks'/></CustomLink>
        <CustomLink to='/home/communities'><SidebarOptions active Icon={PeopleIcon} text='Communities'/></CustomLink>
        <CustomLink to='/home/premium'> <SidebarOptions active Icon={XIcon} text='Premium'/></CustomLink>
        <CustomLink to='/home/profile'> <SidebarOptions active Icon={PermIdentityIcon} text='Profile'/></CustomLink>
        <CustomLink to='/home/more'> <SidebarOptions active Icon={MoreHorizIcon} text='More'/></CustomLink>
        <Button  variant='outlined' className="sidbar_tweet">Post</Button>
        <div className="profile_info">
            <Avatar src={userProfilePic} ></Avatar>
            <div className="user_info">
                <div className="one">{
  loggedInUser && loggedInUser[0]?.name
    ? loggedInUser[0]?.name
    : user && user.displayName
      ? user.displayName
      : result // Replace with appropriate fallback text or logic
}
</div>
                <div className="two">@{result}</div>
            </div>
            <IconButton size="small" sx={{ml:2}}
            aria-controls={openMenu?"basic-menu":undefined}
            aria-haspopup="true" aria-expanded={openMenu?"true":undefined}
           onClick={handleClick}
           ><MoreHorizIcon/></IconButton>
           <Menu id="basic-menu" anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
            <MenuItem className="Profile_info1">
          <Avatar src=  {loggedInUser[0]?.profileImage?loggedInUser[0]?.
          profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}
           />
           <div className="user_info subUser_info">
              <div className="sub">
              <div className="one">{
  loggedInUser && loggedInUser[0]?.name
    ? loggedInUser[0]?.name
    : user && user.displayName
      ? user.displayName
      : result // Replace with appropriate fallback text or logic
}</div>
              <div className="two">@{result}</div>
              </div>
              <ListItemIcon className="done_icon"><DoneIcon></DoneIcon></ListItemIcon>
            </div>
            </MenuItem>
            <Divider/>
            <MenuItem onClick={handleClose}>Add an existing account </MenuItem>
            <MenuItem onClick={handleLogout}>Log out @gdsfg</MenuItem>
           </Menu>
        </div>
        </div>
        </div>
    );
}
export default Sidebar;





