import "./UploadButton.scss";
import { Link } from 'react-router-dom';
import uploadIcon from "../../assets/Images/Icons/upload.svg";
import profileImage from "../../assets/Images/Images/Mohan-muruge.jpg";

function UploadButton() {
  return (
    <>
    <div className="header__upload">
      <Link to="/uploadpage" className="upload__button-styling" >
      <button className="header__upload-button">
        <img
          className="header__upload-icon"
          src={uploadIcon}
          alt="upload__button"
        />
        <p className="header__upload-text">UPLOAD</p>
      </button>
      </Link>
      </div>
      <img className="header__search-profile2" src={profileImage} />
    </>
  );
}
export default UploadButton;
