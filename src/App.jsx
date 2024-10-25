import { useState } from "react"; //this is a called a hook
import "./App.scss";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import UploadButton from "./components/UploadButton/UploadButton";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [countComments, setcountComments] = useState(0);

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
        <VideoPlayer />
      </section>

      <main>
        {/* <VideoHeader/>
      <VideoInfo/>
      <VideoDescription/>
      <CommentCounter/>
      <CommentForm/> */}
      </main>
      {/* <section>
      <RenderedComments/> </section>
    <article>
      <AllVideos/></article> */}
    </>
  );
}

export default App;
