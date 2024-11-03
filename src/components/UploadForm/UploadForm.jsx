import { useState } from "react";
import "./UploadForm.scss";
import publish from "../../assets/Images/Icons/publish.svg";
import { useParams, useNavigate } from "react-router-dom";


function UploadForm({handleSubmit}){

    const navigate = useNavigate();


    const onFormSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const videoName = form.videoName.value;
        const videoDescription = form.videoDescription.value;
    
        alert(`Video uploaded successfully!\nTitle: ${videoName}\nDescription: ${videoDescription}`);

        

        console.log(form.videoName.value);
        console.log(form.videoDescription.value);
      
        handleSubmit(videoName, videoDescription);
        navigate("/");
        
      };
  
    return (
        <>
    

          <form className="uploadpage__form" onSubmit={onFormSubmit}>
            <label >
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
              <textarea  name="videoDescription"
                className="uploadpage__description-entry"
                placeholder="Add a description to your video"
              />
            </div>
            <div>
              <button type="submit" className="uploadpage__button-publish">
                <img className="upload_button-icon" src={publish} alt="Publish Button"/>{" "}
                <p type="submit" className="upload_button-text">PUBLISH</p>
              </button>
            </div>
            <div>
              <button type="reset" className="uploadpage__button-cancel">CANCEL</button>
            </div>
          </form>
      
        </>
    )
}

export default UploadForm;