import { useState } from "react"; //this is a called a hook
import "./App.scss";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UploadButton from "./components/UploadButton/UploadButton";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import TotalComments from "./components/TotalComments/TotalComments";
import CommentForm from "./components/CommentForm/CommentForm";
import VideoComments from "./components/VideoComments/VideoComments";
import AllVideos from "./components/AllVideos/AllVideos";

import videoData from "./data/video-details.json";

function App() {
  const [selected, setSelected] = useState(videoData[0]);
  const videos = videoData.filter((v) => v !== selected);

  console.log("App component rendered");

  return (
    <>
      <header>
        <nav className="header__layout">
          <Header className="header__layout-component" />
          <div className="header__layout-component">
            <Search />
            <UploadButton />
          </div>
        </nav>
      </header>

      <section>
        <VideoPlayer video={selected} />
      </section>

      <main className="layout__desktop">
        <section>
          <VideoInfo video={selected} />
          <TotalComments comments={selected.comments} />
          <CommentForm comments={selected.comments} />
          <VideoComments video={selected} />
        </section>

        <section className="layout__allvideos">
          <AllVideos videos={videos} setSelected={setSelected} propname="123" />
        </section>
      </main>
    </>
  );
}

export default App;
