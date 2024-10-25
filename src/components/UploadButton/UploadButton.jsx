import "./UploadButton.scss";
import uploadIcon from "../../assets/Images/Icons/upload.svg";

function UploadButton() {
  return (
    <>
    <div className="header__upload">
      <img
        className="header__upload-icon"
        src={uploadIcon}
        alt="upload__button"
      />
      <p className="header__upload-text">
      UPLOAD</p>
    </div>
    </>
  );
}
export default UploadButton;
