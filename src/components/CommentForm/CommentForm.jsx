import "./src/components/CommentForm/CommentForm.scss"

function CommentForm({handleSubmit}) {
    return (
        <form className="comment-form" onSubmit={handleSubmit}> 
        <label>
            JOIN THE <CONVERSATION>
                <input type="text" name="commentEntry"></input>
            </CONVERSATION>
        </label>
    </form>
    )
}

export default CommentForm;