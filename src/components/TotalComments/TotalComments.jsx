import { useState } from "react";
import "./TotalComments.scss";


function TotalComments({ comments }) {
    return (
      <div className="comments">
        <h3 className="comments__count">{comments.length} Comments</h3>
      </div>
    );
  }

  export default TotalComments;