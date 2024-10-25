import "./VideoPlayer.scss";

function VideoPlayer({ video }) {
  return (
    <div className="video__container">
         
      <video
        poster={video.image}
        src={video.video + "?api_key=hi"}
        controls
      ></video>
      <h1>{video.title}</h1>
   
      </div>
  );
}

export default VideoPlayer;
