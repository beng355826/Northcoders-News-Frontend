import createdAtConvertor from "./Utils/createdAtConvertor";

const ArticleCard = ({article}) => {

    console.log(article)
    return ( <li className="listContainer" key={article.article_id}>
    <div className="listDetails">
      <h2>{article.title}</h2>
      <p>By {article.author}</p>
      <p>Comments: {article.comment_count}</p>
      <p>{createdAtConvertor(article.created_at)}</p>
      <p>votes:{article.votes}</p>
      <p>Article #{article.article_id}</p>
    </div>
    <img
      className="listPic"
      src={article.article_img_url}
      alt={`picture of ${article.title}`}
    />
  </li> );
}
 
export default ArticleCard;