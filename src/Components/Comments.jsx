import { useState, useEffect } from "react";
import { getAssociatedComments } from "./Api";
import createdAtConvertor from "./Utils/createdAtConvertor";

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAssociatedComments(articleId).then((recComments) => {
      setComments(recComments);
      setIsLoading(false);
    });
  }, []);

  

  if (isLoading) return <p>Loading comments ...</p>;
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="commentsContainer">
            <div className="comDeets">
            <p><b>{comment.author} @ {createdAtConvertor(comment.created_at)}{" "}</b></p>
            <p>{comment.body}</p>
            <p>{comment.votes} 🙌 </p>
            </div>
            
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
