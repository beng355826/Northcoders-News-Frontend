import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Comments from "./Comments";
import Nav from "./Nav";
import { getSingleArticle, patchVote } from "./Api";
import createdAtConvertor from "./Utils/createdAtConvertor";


const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setSingleArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [disabledUp, setDisabledUp] = useState(false);
  const [disabledDown, setDisabledDown] = useState(false);
  const [error, setError] = useState(null);

  const [vote, setVote] = useState(0);

  useEffect(() => {
    getSingleArticle(article_id).then((recArticle) => {
      setSingleArticle(recArticle);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {

      patchVote(article_id, vote)
        .then((recData) => {
          setVote(0);
        })
        .catch((err) => {
          setError(err)
          setDisabledDown(true);
          setDisabledUp(true);
        });
    
  }, [vote]);

  

  const handleUpClick = (e) => {
    if (disabledDown) {
      setDisabledDown(false);
      article.votes = article.votes + 1;
      setVote(1);
    } else {
      setDisabledUp(true);
      article.votes = article.votes + 1;
      setVote(1);
    }
  };

  const handleDownClick = (e) => {
    if (disabledUp) {
      setDisabledUp(false);
      article.votes = article.votes - 1;
      setVote(-1);
    } else {
      setDisabledDown(true);
      article.votes = article.votes - 1;
      setVote(-1);
    }
  };

  if (isLoading) return <p className="singleArticleText">Loading ...</p>;
  return (
    <div>
      <Nav />
      <section className="articleWrapper">
        <p className="articleBody">{article.body}</p>
        <div className="articleDetails">
          <img className="singleImg" src={article.article_img_url}></img>
          <h4>
            {article.title} - #{article.article_id}
          </h4>
          <p>by {article.author}</p>
          <p>{createdAtConvertor(article.created_at)}</p>

          <div className="articleVote">
            votes:{article.votes}
            <button
              disabled={disabledUp}
              onClick={() => {
                handleUpClick();
              }}
            >
              👍
            </button>
            <button
              disabled={disabledDown}
              onClick={() => {
                handleDownClick();
              }}
            >
              👎
            </button>

            {error === null ? (<p></p>) :(<p>Unable to vote at this time 😭</p> )}
            
          </div>
        </div>
      </section>
      <aside>
        <Comments articleId={article_id} />
      </aside>
    </div>
  );
};

export default SingleArticle;
