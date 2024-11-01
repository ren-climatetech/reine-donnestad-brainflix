import "./VideoComments.scss";

function VideoComments({ video, setSelected }) {
  console.log("Video prop:", video);
  console.log("Comments array:", video?.comments);
  
  return (
    <div key={video?.id}>
      <ul>
        {video?.comments.map((comment) => (
          <li className="videocomment_layout" key={comment.id}>
            <div className="videocomment__image"></div>
            <div className="videocomment__details">
              <div className="videocomment__details-header">
                <p>
                  <strong>{comment.name}</strong>
                </p>
                <p className="videocomment__timestamp">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </p>
              </div>

              <p className="videocomment__details-comment">{comment.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoComments;
