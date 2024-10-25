import { useState } from "react"; //this is a called a hook
import "./App.scss";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UploadButton from "./components/UploadButton/UploadButton";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";

import videoData from "./data/video-details.json";
// import AllVideos from "./components/AllVideos/AllVideos";

function App() {
  const [selected, setSelected] = useState(videoData[0]);
  const videos = videoData.filter((v) => v !== selected);

  console.log("App component rendered");

  return (
    <>
      <header>
        <nav> 
          <Header />
          <Search />
          <UploadButton />
        </nav>
      </header>

      <section>
        <VideoPlayer video={selected} />
        <VideoInfo video={selected} />
        <Comments comments={selected.comments} />
      </section>

      <section>
        <h2>list</h2>
        <List videos={videos} setSelected={setSelected} propname="123" />
      </section>
    </>
  );
}

function Comments({ comments }) {
  return (
    <div className="comments">
      <h2>Comments</h2>
      <div className="comments__count">{comments.length} comments</div>
    </div>
  );
}

function List(props) {
  const { videos, setSelected, propname } = props;
  console.log(props);

  return (
    <div>
      <h4>
        List length: {videos.length} -- propname:{propname}
      </h4>
      <ul>
        {videos.map((video) => (
          <VideoTile key={video.id} video={video} setSelected={setSelected} />
        ))}
      </ul>
    </div>
  );
}

function VideoTile({ video, setSelected }) {
  return (
    <li
      className="tile"
      onClick={() => {
        console.log("User clicked on:", video);
        setSelected(video);
      }}
    >
      {video.title}
      <img className="tile__image" src={video.image} alt={video.title} />
    </li>
  );
}

export default App;
