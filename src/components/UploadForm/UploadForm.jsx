import { useState } from "react";
import "./UploadForm.scss";
import publish from "../../assets/Images/Icons/publish.svg";
import { useParams, useNavigate } from "react-router-dom";
import thumbnail from "../../assets/Images/Images/Upload-video-preview.jpg";

function UploadForm() {
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();

    alert("Your video has been successfully uploaded!");

    navigate("/");
  };
    const onCancel = () => {
      navigate("/");
  };

  return (
    <>
      <div className="uploadpage__layout">
        <div className="uploadpage__layout-container">
          <h3 className="uploadpage__subheader">VIDEO THUMBNAIL </h3>

          <img
            src={thumbnail}
            className="uploadvideo__thumbnail"
            alt="Video Thumbnail"
          />
        </div>

        <div className="uploadpage__layout-container">
          <form className="uploadpage__form" onSubmit={ onFormSubmit }>
            <label>
              <h3 className="uploadpage__subheader-form">TITLE YOUR VIDEO</h3>
            </label>
            <div className="uploadpage__title">
              <input
                type="text"
                name="videoName"
                className="uploadpage__title-entry"
                placeholder="Add a title to your video"
              />
            </div>

            <label>
              <h3 className="uploadpage__subheader-form">
                ADD A VIDEO DESCRIPTION
              </h3>
            </label>
            <div className="uploadpage__description">
              <textarea
                name="videoDescription"
                className="uploadpage__description-entry"
                placeholder="Add a description to your video"
              />
            </div>
            <div className="uploadpage__button">
        <div className="uploadpage__button-layout">
          <button type="submit" className="uploadpage__button-publish">
            <img
              className="upload_button-icon"
              src={publish}
              alt="Publish Button"
            />{" "}
            <p  className="upload_button-text">
              PUBLISH
            </p>
          </button>
        </div>
        <div className="uploadpage__button-layout">
          <button type="button" className="uploadpage__button-cancel" onClick={onCancel}>
            CANCEL
          </button>
        </div>
      </div>


          </form>
        </div>
      </div>
    </>
  );
}

export default UploadForm;
