import "./VideoInfo.scss";


function VideoInfo({ video }) {
  return (
    <div>
      <div className="video__container-info">
        <div className="video__container-orientation">
          <p className="video__channel">{video.channel}</p>
          <p className="video__timestamp">
            {new Date(video.timestamp).toLocaleDateString()}
          </p>
        </div>

        <div className="video__container-orientation">
          <p className="video__views">
            <img src="src/assets/Images/Icons/views.svg" />
            {video.views}
          </p>
          <p className="video__likes">
            <img src="src/assets/Images/Icons/likes.svg" />
            {video.likes}
          </p>
        </div>
      </div>
      <p className="video__description">{video.description}</p>
    </div>
  );
}

export default VideoInfo;

//nts move back into video header
