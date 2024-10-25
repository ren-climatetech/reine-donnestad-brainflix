import "./VideoPlayer.scss";
// import videoPlayer from "https://unit-3-project-api-0a5620414506.herokuapp.com/stream";

function VideoPlayer() {
    return (
      <div className="video__container">
       
          <video src="https://unit-3-project-api-0a5620414506.herokuapp.com/stream?api_key=1"></video> 

      </div>
    );
  }
  
  export default VideoPlayer;