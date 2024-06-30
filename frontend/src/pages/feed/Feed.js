import React, { useEffect, useState } from "react";
import './Feed.css'
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post";
const Feed =()=>{
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
   fetch('http://localhost:6001/post')
   .then(res=>res.json())
   .then(data=>{
    setPosts(data)
   })
  },[posts])
    return(
        <div  className="feed" >
          <TweetBox/>{
                  posts.map(p=><Post key={p._id} p={p}/>)
          }
        </div>
    );
}
export default Feed;