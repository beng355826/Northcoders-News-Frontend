import { useState, useEffect } from "react";
import { getAssociatedComments, postComment, deleteApiComment } from "./Api";
import createdAtConvertor from "./Utils/createdAtConvertor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [commentInput, setCommentInput] = useState();
  const [renderComments, setRenderComments] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);


  useEffect(() => {
    getAssociatedComments(articleId).then((recComments) => {
      setComments(recComments);
      setRenderComments(false);
      setIsLoading(false);
    });
  }, [renderComments, deleteComment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentInput) {
      postComment(articleId, commentInput).then((recComment) => {
        setIsLoading(true);
        setRenderComments(true);
      });
    }
    setCommentInput("");
  };

  const handleDelete = (commentId) => {
    setTimeout(() => {
      deleteApiComment(commentId).then((msg) => {
        setDeleteComment(commentId);
      });
    });
  };

  if (isLoading) return <p>Loading comments ...</p>;
  return (
    <div>
      <form onSubmit={handleSubmit} className="addCommentContainer">
        <button className="addCommentDeets" type="submit">
          Add Comment
        </button>
        <textarea
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value);
          }}
          className="addCommentInput"
          rows="4"
          cols="70"
          placeholder="Enter comment here"
        ></textarea>
      </form>

      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="commentsContainer">
              <div className="comDeets">
                <p>
                  <b>
                    {comment.author} @ {createdAtConvertor(comment.created_at)}
                  </b>
                </p>
                <p>{comment.body}</p>
                <p>{comment.votes} 🙌 </p>
                {comment.author === "weegembump" ? (
                  <button
                    onClick={() => {
                      toast("comment deleted");
                      handleDelete(comment.comment_id);
                    }}
                  >
                    Delete comment!
                  </button>
                ) : (
                  <p></p>
                )}
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
