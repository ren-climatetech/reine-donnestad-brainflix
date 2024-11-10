import "./VideoPlayer.scss";

function VideoPlayer({ video }) {

  
  return (
    <div>
      <video
        className="video__container"
        poster={video?.image}
        controls
      ></video>
    </div>
  );
}

export default VideoPlayer;
