import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './MainPage.css'
import {useNavigate} from 'react-router-dom'
import AddLinkIcon from '@mui/icons-material/AddLink';
import LockResetIcon from '@mui/icons-material/LockReset';
import useLoggedInUser from '../../../hooks/useLoggedInUser'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Post from '../../feed/Post';
import EditProfile from '../EditProfile/EditProfile';
import axios from 'axios';
const MainPage = ({user}) => {
const navigate=useNavigate();
const [loggedInUser]=useLoggedInUser();
const[isloading,setIsLoading]=useState("");
const[imageURL,setImageURL]=useState("");
const username=user?.email?.split('@')[0];
const [posts,setPosts]=useState([]);
useEffect(()=>{
 fetch(`http://localhost:6001/userPost?email=${user?.email}`)
 .then(res=>res.json())
 .then(data=>{
  setPosts(data)
 })
},[posts,user?.email])
const handleUploadCoverImage=(e)=>{
    setIsLoading(true)
    const image=e.target.files[0];
    const formData = new FormData();
    formData.set('image',image)
    axios.post("https://api.imgbb.com/1/upload?key=738e05b09185b65b5433e34467f19bc8",formData)
    .then(res=>{
        const url=res.data.data.display_url;
        const userCoverImage ={
            email:user?.email,
            coverImage:url
        }
      setImageURL(url)
      setIsLoading(false);
      if(url){
       axios.patch(`http://localhost:6001/userUpdates/${user?.email}`,userCoverImage)
      }
    })

}
const handleUploadProfileImage=(e)=>{
    setIsLoading(true)
    const image=e.target.files[0];
    const formData = new FormData();
    formData.set('image',image)
    axios.post("https://api.imgbb.com/1/upload?key=738e05b09185b65b5433e34467f19bc8",formData)
    .then(res=>{
        const url=res.data.data.display_url;
        const userProfileImage ={
            email:user?.email,
            profileImage:url
        }
      setImageURL(url);
      setIsLoading(false);
      if(url){
        axios.patch(`http://localhost:6001/userUpdates/${user?.email}`, userProfileImage)
       }
    })
}
    return (
    <div >
      <ArrowBackIcon className='arrow-icon' onClick={()=>{navigate('/')}}/>
        <h4 className='heading-4'>@{username}</h4>
        <div className="mainProfile">
            <div className="profile-bio">
                {
                    <div>
                        <div className="coverImageContainer">
                            <img  className='coverImage' src={loggedInUser[0]?.coverImage?loggedInUser[0]?.coverImage:'https://www.proactivechannel.com/Files/BrandImages/Default.jpg'} alt="" />
                        <div className="hoverCoverImage">
                            <label htmlFor='image' className='imageIcon'>
                            {
                                    isloading?<LockResetIcon className='photoIcon PhotoIconDisabled'/>
                                  :<CenterFocusWeakIcon className='photoIcon'/>
                                }
                            </label>
                            <div className="imageIcon_tweetButton">
                                <input type="file" className='imageInput' id='image'onChange={handleUploadCoverImage} />
                            </div>
                        </div>
                        </div>
                        <div className="avatar-img">
                            <div className="avatarContainer">
                            <img className='avatar' src={loggedInUser[0]?.profileImage?loggedInUser[0]?.profileImage:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}
                             alt="" />
                           
                            <div className="hoverAvatarImage">
                                <div className="imageIcon_tweetButton">
                                <label htmlFor='profileImage' className='imageIcon'>
                                {
                                    isloading?<LockResetIcon className='photoIcon PhotoIconDisabled'/>
                                  :<CenterFocusWeakIcon className='photoIcon'/>
                                }
                            </label>
                            <div className="imageIcon_tweetButton">
                                <input type="file" className='imageInput' id='profileImage'onChange={handleUploadProfileImage} />
                            </div>
                                </div>
                            </div> </div>
                            <div className="userInfo">
                                <div>
                                    <h3 className='heading-3'>
                                        {loggedInUser[0]?.name?loggedInUser[0]?.name:user&&user?.displayName}
                                        <p className='usernameSection'>@{username}</p>
                                    </h3>
                                </div>
                                <EditProfile  user={user}  LoggedInUser={loggedInUser}/>
                                </div>
                                <div className="infoContainer">
                                {loggedInUser[0]?.bio?loggedInUser[0]?.bio:''}
                                <div className="locationAndLink">
                                {loggedInUser[0]?.location?<p className='subInfo'><MyLocationIcon/>{loggedInUser[0]?.location}</p>:''}
                                {loggedInUser[0]?.website?<p className='subInfo link'><AddLinkIcon/>{loggedInUser[0]?.website}</p>:''}
                                </div>
                                </div>
                                <h4 className='tweetsText'> Tweets</h4>
                                
                                <hr/>
                            </div>
                            {
                                posts.map(p=><Post id={p._id} p={p}/>)
                            }
                        </div>
                }
            </div>
        </div>
    </div>
  )
}

export default MainPage
