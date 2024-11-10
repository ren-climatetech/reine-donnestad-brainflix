import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, API_KEY } from "../../../utils";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import TotalComments from "../../components/TotalComments/TotalComments";
import CommentForm from "../../components/CommentForm/CommentForm";
import VideoComments from "../../components/VideoComments/VideoComments";
import AllVideos from "../../components/AllVideos/AllVideos";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  let { videoId } = useParams();

  async function getVideos() {
    try {
      const { data } = await axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`);

      setVideos(data);
    } catch (err) {
      console.log("error get videos", err);
    }
  }

  async function getVideoById(id) {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/videos/${id}?api_key=${API_KEY}`
      );

      setSelected(data);

      //added this line to set comments from selected video
      // setComments(data.comments || []);
    } catch (error) {
      console.log("getting error", error);
    }
  }

  useEffect(() => {
    if (videos.length !== 0) {
      const id = videoId ?? videos[0].id;
      getVideoById(id);
    }
  }, [videos, videoId]);

  useEffect(() => {
    getVideos();
  }, []);

  if (!videos) {
    return <div>loading videos...</div>;
  }

  if (!selected) {
    return <div>loading selection...</div>;
  }
  const filterVideo = videos.filter((v) => v.id !== selected.id);

  return (
    <div>
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
          <AllVideos videos={filterVideo} setSelected={setSelected} />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
