import "./AllVideos.scss";
import { Link } from "react-router-dom";

function AllVideos(props) {
  const { videos } = props;
  console.log(props);

  return (
    <div>
      <h4 className="tile__sectionheader">NEXT VIDEOS</h4>
      <ul className="tile__container">
        {videos.map((video) => (
          <VideoTile key={video.id} video={video} />
        ))}
      </ul>
    </div>
  );
}

function VideoTile({ video }) {
  return (
    <li
      className="tile"
      onClick={() => {
        console.log("User clicked on:", video);
        setSelected(video);
      }}
    >
      <Link className="tile__styling" to={"/video/" + video.id}>
        <img className="tile__image" src={video.image} alt={video.title} />
        <div className="tile__info">
          <h3 className="tile__info-title">{video.title} </h3>
          <h3 className="tile__info-channel">{video.channel}</h3>
        </div>
      </Link>
    </li>
  );
}

export default AllVideos;