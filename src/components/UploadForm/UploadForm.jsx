import { useState } from "react";
import "./UploadForm.scss";
import publish from "../../assets/Images/Icons/publish.svg";
import { useNavigate } from "react-router-dom";
import thumbnail from "../../assets/Images/Images/Upload-video-preview.jpg";
import { BASE_URL, API_KEY } from "../../../utils.js";
import axios from "axios";

function UploadForm() {
  const navigate = useNavigate();

  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const newVideo = {
      title: { value: videoTitle },
      description: { value: videoDescription },
      image:
        "https://images.pexels.com/photos/1876620/pexels-photo-1876620.jpeg",
    };

    try {
      await axios.post(`${BASE_URL}/videos`, newVideo);
    } catch (error) {
      console.error("Failed to upload", error);
    }
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
          <form className="uploadpage__form" onSubmit={onFormSubmit}>
            <label>
              <h3 className="uploadpage__subheader-form">TITLE YOUR VIDEO</h3>
            </label>
            <div className="uploadpage__title">
              <input
                type="text"
                // name="videoName"
                name="videoTitle"
                className="uploadpage__title-entry"
                placeholder="Add a title to your video"
                onChange={(e) => setVideoTitle(e.target.value)}
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
                onChange={(e) => setVideoDescription(e.target.value)}
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
                  <p className="upload_button-text">PUBLISH</p>
                </button>
              </div>
              <div className="uploadpage__button-layout">
                <button
                  type="button"
                  className="uploadpage__button-cancel"
                  onClick={onCancel}
                >
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
