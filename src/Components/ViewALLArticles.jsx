import { useState, useEffect } from "react";
import { getArticles } from "./Api";
import ArticleCard from "./ArticleCard";

const ViewALLArticles = ({topic}) => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic).then((receivedArticles) => {
      setArticles(receivedArticles);
      setIsLoading(false)
    });
  }, [topic]);

  if (isLoading) return <p>Loading.....</p>
  return (
    <section>
      {topic ? <h3> Articles by {topic} </h3> : <h3>All Articles</h3>}
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard article={article} key={article.article_id}/>
          );
        })}
      </ul>
    </section>
  );
};

export default ViewALLArticles;
