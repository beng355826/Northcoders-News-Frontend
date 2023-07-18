import { useState, useEffect } from "react";
import { getArticles } from "./Api";
import createdAtConvertor from "./Utils/createdAtConvertor";
import ArticleCard from "./ArticleCard";

const ViewALLArticles = (topic) => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((receivedArticles) => {
      setArticles(receivedArticles);
      setIsLoading(false)
    });
  }, []);

  console.log(articles);

  if (isLoading) return <p>Loading.....</p>
  return (
    <section>
      <h3>All Articles</h3>
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard article={article}/>
          );
        })}
      </ul>
    </section>
  );
};

export default ViewALLArticles;
