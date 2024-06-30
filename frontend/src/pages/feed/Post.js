import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import React from "react";
import './Post.css'
const Post =({p})=>{
    const {name,result,photo,post,profilePhoto}=p;
    return(
        <div className="post">
            <div className="post_avatar">
                <Avatar  src={profilePhoto}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{name}{""} <span className="post_headerSpecial">
                            <VerifiedIcon className="post_badge"/>@{name}
                            </span>
                            </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{post}</p>
                    </div>
                    <img className="img_post" src={photo} width='550' ></img>
                    <div className="post_footer">
<ChatBubbleOutlineIcon className="post_footer_icon" fontSize="small"/>
<RepeatIcon className="post_footer_icon" fontSize="small"/>
<FavoriteBorderIcon className="post_footer_icon" fontSize="small"/>
<PublishIcon className="post_footer_icon" fontSize="small"/>
                    </div>
                </div>

            </div>
</div>
    )
}
export default Post;