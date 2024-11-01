import "./VideoInfo.scss";
import views from "../../assets/Images/Icons/views.svg"
import likes from "../../assets/Images/Icons/likes.svg"



function VideoInfo({ video }) {
  return (
    <>
    <h1>{video.title}</h1>
    <div>
      <div className="video__container-info">
        <div className="video__container-orientation">
          <p className="video__channel">By {video.channel}</p>
          <p className="video__timestamp">
            {new Date(video.timestamp).toLocaleDateString()}
          </p>
        </div>

        <div className="video__container-orientation">
          <p className="video__views">
            <img src={views} />
            {video.views}
          </p>
          <p className="video__likes">
            <img src={likes} />
            {video.likes}
          </p>
        </div>
      </div>
      <p className="video__description">{video.description}</p>
    </div>
    </>
  );
}

export default VideoInfo;

//nts move back into video header
