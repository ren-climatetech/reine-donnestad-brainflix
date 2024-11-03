import "./UploadVideo.scss";

import thumbnail from "../../assets/Images/Images/Upload-video-preview.jpg";

function UploadVideo({}) {
  return (
    <>
      <img src={thumbnail} className="uploadvideo__thumbnail" alt="Video Thumbnail"/>
      
    </>
  );
}

export default UploadVideo;
