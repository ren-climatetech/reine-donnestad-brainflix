import { useState } from "react"; //this is a called a hook
import videoData from "../../data/video-details.json"
import "./VideoHeader.scss"


function VideoHeader ({ video }) {
    return (
        <div >
            
            {videoData.map(video => (
                <div key={video.id}>
                <h1 className="video__header-title">{video.title}</h1>
                </div>
            ))}
           
        </div>
    );

}

export default VideoHeader;

