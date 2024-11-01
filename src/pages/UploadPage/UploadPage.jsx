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
      <h2>VIDEO THUMBNAIL </h2>
      <UploadVideo />
      {/* get uploadvideo prop from UploadVideo component */}
      <h2>TITLE YOUR VIDEO</h2>
      <h2>ADD A VIDEO DESCRIPTION</h2>
      <button>PUBLISH</button>
      <button>CANCEL</button>
    </>
  );
}

export default UploadPage;
