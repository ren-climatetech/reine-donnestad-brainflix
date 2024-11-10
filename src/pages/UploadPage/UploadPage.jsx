import React from "react";
import UploadForm from "../../components/UploadForm/UploadForm";

import "./UploadPage.scss";

function UploadPage() {
  return (
    <>
      <div className="uploadpage">
        <div>
          <h1 className="uploadpage__header">Upload Video</h1>
        </div>

        <div>
          <UploadForm />
        </div>
      </div>
    </>
  );
}

export default UploadPage;
