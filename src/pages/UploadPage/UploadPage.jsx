import React from "react";
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import UploadForm from "../../components/UploadForm/UploadForm";

import "./UploadPage.scss";

function UploadPage({ videos }) {
  const handleSubmit = (videoName, videoDescription) => {
    console.log("Submitted:", videoName, videoDescription);
  };

  return (
    <>
      <div className="uploadpage">
        <div>
          <h1 className="uploadpage__header">Upload Video</h1>
        </div>
        <h3 className="uploadpage__subheader">VIDEO THUMBNAIL </h3>
      </div>
      <UploadVideo />
      <UploadForm handleSubmit={handleSubmit} />
    </>
  );
}

export default UploadPage;
