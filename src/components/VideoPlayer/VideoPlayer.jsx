import "./VideoPlayer.scss";

function VideoPlayer({ video }) {
  return (
    <div>
      <video
        className="video__container"
        poster={video.image}
        src={video.video + "?api_key=hi"}
        controls
      ></video>
    </div>
  );
}

export default VideoPlayer;
