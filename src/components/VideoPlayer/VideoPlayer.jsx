import "./VideoPlayer.scss";

function VideoPlayer({ video }) {
  return (
    <div className="video__container">
      <video poster={video.image} src={video.video + "?api_key=hi"} controls></video>
      <div>{video.description}</div>
    </div>
  );
}

export default VideoPlayer;
