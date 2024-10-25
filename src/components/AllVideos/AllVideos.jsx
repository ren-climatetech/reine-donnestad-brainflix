// import { useState } from "react"; 
// import videoData from "../../data/video-details.json";
// import "./AllVideos.scss"

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