import "./AllVideos.scss"

function AllVideos(props) {
    const { videos, setSelected, propname } = props;
    console.log(props);
  
    return (
      <div>
        <h4 className="tile__sectionheader">
          NEXT VIDEOS
        </h4>
        <ul className="tile__container">
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

        <img className="tile__image" src={video.image} alt={video.title} />
        <div className="tile__info">
        <h3 className="tile__info-title">{video.title} </h3>
        <h3 className="tile__info-channel">{video.channel}</h3>
        </div>

      </li>
    );
  }

  export default AllVideos;


// import { useState } from "react"; 
// import videoData from "../../data/video-details.json";

// function App() {
//   console.log("render");

//   const initialVideo = videoData.length > 0 ? videoData[0] : null;
//   const [selected, setSelected] = useState(videos[0]);
//   console.log("Initial video selected:", selected);

//   const videos = videoData.filter(video => video.id !== selected?.id);

//   return (
//     <>
//       <ul>
//         {videos.map((video) => (
//           <li
//             key={video.id}
//             onClick={() => {
//                 console.log('User clicked on:', video.title);
//                 setSelected(video);
//             }}
//           >
//             {video.title}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <img src={selected.image} alt={selected.name}/>
//       <h1>{selected.title}</h1>
//       <h2>{selected.channel}</h2>
//       </div>
//     </>
//   );
// }