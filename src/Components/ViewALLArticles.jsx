import { useState, useEffect } from "react";
import { getArticles } from "./Api";
import createdAtConvertor from "./Utils/createdAtConvertor";

const ViewALLArticles = (topic) => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  console.log(articles)

  return (
    <section>
      <h3>All Articles</h3>
      <ul>
        {articles.map((article) => {
          return (
            <li className="listWrapper" key={article.article_id}>
              <div className="listDetails">
              <h2 >{article.title}</h2>
              <p >By {article.author}</p>
              <p >Comments: {article.comment_count}</p>
              <p >{createdAtConvertor(article.created_at)}</p>
              <p >Article #{article.article_id}</p>
              </div>
              <img className="listPic"
                src={article.article_img_url}
                alt={`picture of ${article.title}`}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ViewALLArticles;
