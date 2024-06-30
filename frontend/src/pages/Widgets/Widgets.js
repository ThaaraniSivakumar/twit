import './Widgets.css'
import React from "react";
import {TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';
import './Widgets.css'
const Widgets = () =>{
    return(
      <div className="widgets">
        <div className="widgets_input">
       < SearchIcon className='widgets_searchIcon'/>
       <input className='input' type="text" placeholder='Search'/>
        </div>
        <div className="widgets_widgetContainer">
            <h2>What's happening</h2>
            <TwitterTweetEmbed
  tweetId={'1557187138352861186'}
/> 
<TwitterTimelineEmbed sourceType='profile' screenName='elonmusk' options={{height:400}}/>
        </div>
      
      </div>
    )
}
export default Widgets;