import React from "react";
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

        <div>
          <UploadForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}

export default UploadPage;
