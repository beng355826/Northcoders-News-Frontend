import { useState, useEffect } from "react";
import { getAssociatedComments, postComment } from "./Api";
import createdAtConvertor from "./Utils/createdAtConvertor";

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [commentInput, setCommentInput] = useState()
  const [renderComments, setRenderComments] = useState(false)
const scrollBehaviour = { top: 500, behavior: "smooth" }

  useEffect(() => {
    getAssociatedComments(articleId).then((recComments) => {
      setComments(recComments);
      setRenderComments(false)
      setIsLoading(false);
      
    });
  }, [renderComments]);

  


  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(commentInput){

      postComment(articleId, commentInput).then((recComment) => {
        setIsLoading(true)
        setRenderComments(true)
      })

    }
      
      
      setCommentInput("")
     
  }

  

  if (isLoading) return <p>Loading comments ...</p>;
  return (
    <div>
   
    <form onSubmit={handleSubmit} className="addCommentContainer">
    <button className="addCommentDeets" type="submit">Add Comment</button>
    <textarea value={commentInput} onChange={(event) => {
      setCommentInput(event.target.value)
    }}  
    
    className="addCommentInput" rows="4" cols="70" placeholder="Enter comment here">
    </textarea>
    </form>
    
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="commentsContainer">
            <div className="comDeets">
            <p><b>{comment.author} @ {createdAtConvertor(comment.created_at)}</b></p>
            <p>{comment.body}</p>
            <p>{comment.votes} 🙌 </p>
            </div>
            
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default Comments;
