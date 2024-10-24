import "./UploadButon.scss";
import uploadIcon from "/assets/images/Icons/upload.svg";

function UploadButton() {
    return (
        <div className="header__upload">
          <img className="header__icon--upload" src={uploadIcon} alt="upload__button"/>
          UPLOAD
        </div>

    );
  }
  export default UploadButton;