import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams, useNavigate, Navigate } from "react-router-dom";
import { BASE_URL, API_KEY } from "../../../utils.js";
// import videoData from "./data/video-details.json";
import UploadVideo from "../../components/UploadVideo/UploadVideo";
import "./UploadPage.scss";

function UploadPage({ videos }) {
  return (
    <>
      <div className="uploadpage">
        <h1 className="uploadpage__header">Upload Video</h1>
      </div>
      <h3 className="uploadpage__subheader">VIDEO THUMBNAIL </h3>
      <UploadVideo />
      {/* get uploadvideo prop from UploadVideo component */}

      <form>
        <label>
          <h3 className="uploadpage__subheader">TITLE YOUR VIDEO</h3>
        </label>
        <div className="uploadpage__title">
          <input
            type="text"
            className="uploadpage__title-entry"
            placeholder="Add a title to your video"
          />
        </div>

        <label>
          <h3 className="uploadpage__subheader">ADD A VIDEO DESCRIPTION</h3>
        </label>
        <div className="uploadpage__description">
        <textarea
          className="uploadpage__description-entry"
          placeholder="Add a description to your video"
        />
        </div>
        <div>
          <button className="uploadpage__button-publish">PUBLISH</button>
        </div>
        <div>
          <button className="uploadpage__button-cancel">CANCEL</button>
        </div>
      </form>
    </>
  );
}

export default UploadPage;
