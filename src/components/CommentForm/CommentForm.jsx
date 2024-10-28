import { useState } from "react";
import "./CommentForm.scss";
import profileImage from "../../assets/Images/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Images/Icons/add_comment.svg"

function CommentForm({ handleSubmit }) {
    const [commentEntry, setCommentEntry]= useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        handleSubmit(commentEntry); 
        setCommentEntry(""); 
      };

    const handleChange = (event) => {
    setCommentEntry(event.target.value); 
    };
    
  return (
    <>
    <div className="commentform">
    <img className="commentform__profile" src={profileImage} />
      <form className="commentform__layout" id="commentForm" autoComplete="on" onSubmit={handleFormSubmit}>
     
        <label>
        <h3 className="commentform__label">JOIN THE CONVERSATION</h3>
        </label>
        <textarea className="commentform__input" placeholder="Add a new comment" id="inputComment"  required >

        </textarea>
        <button className="commentform__button" type="submit">
            <img className="commentform__icon" src={commentIcon} alt="add_comment_button"/>
            <p className="commentform__text">COMMENT</p></button>
      </form>
    </div>
    
    </>
  );
}

export default CommentForm;