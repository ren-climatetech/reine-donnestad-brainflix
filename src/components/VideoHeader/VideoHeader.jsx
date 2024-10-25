import { useState } from "react"; //this is a called a hook
import videoData from "../../data/video-details.json"
import "./VideoHeader.scss"


function VideoHeader () {
    return (
        <div className="header__video">
            
            {videoData.map(video => (
                <div key={video.id}>
                <h2>{video.title}</h2>
                <p>{video.channel}</p>
                <p>{video.timestamp}</p>
                <p>{video.views}</p>
                <p>{video.likes}</p>
                </div>
            ))}
           
        </div>
    );

}

export default VideoHeader;

