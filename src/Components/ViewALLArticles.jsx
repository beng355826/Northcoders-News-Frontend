import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "./Api";
import ArticleCard from "./ArticleCard";
import capitalise from "./Utils/capitalise";


const ViewALLArticles = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);


  const {topic} = useParams()


  useEffect(() => {
    getArticles(topic).then((receivedArticles) => {
      setArticles(receivedArticles);
      setIsLoading(false)
    });
  }, [topic]);



  if (isLoading) return <p>Loading.....</p>
  return (
    <section>
      {topic ? <h3> Articles by {capitalise(topic)} </h3> : <h3>All Articles</h3>}
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
