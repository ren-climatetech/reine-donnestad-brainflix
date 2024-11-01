import "./UploadVideo.scss";
import upload from "../../assets/Images/Icons/upload.svg";
import publish from "../../assets/Images/Icons/publish.svg";
import thumbnail from "../../assets/Images/Images/Upload-video-preview.jpg";

function UploadVideo({}) {
  return (
    <>
      <img src={thumbnail} />
      <img src={upload} />
      <img src={publish} />
    </>
  );
}

export default UploadVideo;
