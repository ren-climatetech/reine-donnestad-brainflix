import "./VideoPlayer.scss";

function VideoPlayer({ video }) {

  console.log(video);
  
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
