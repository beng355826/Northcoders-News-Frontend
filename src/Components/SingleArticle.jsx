import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Comments from './Comments'
import { getSingleArticle } from './Api'
import createdAtConvertor  from './Utils/createdAtConvertor'

const SingleArticle = () => {
const { article_id } = useParams()

const [article, setSingleArticle] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getSingleArticle(article_id).then((recArticle) => {
        setSingleArticle(recArticle)
        setIsLoading(false)
        
    })
}, []);


if(isLoading) return <p className='singleArticleText'>Loading ...</p>
    return ( 
       
        <div>
        <section className='articleWrapper'>
        <p className='articleBody'>{article.body}</p>
        <div className='articleDetails'>
        <img className='singleImg' src={article.article_img_url}></img>
        <h4 >{article.title} - #{article.article_id}</h4>
        <p>by {article.author}</p>
        <p>{createdAtConvertor(article.created_at)}</p>
        <p>votes:{article.votes}</p>
        </div>
        </section>
       <aside>
        <Comments articleId={article_id}/>
       </aside>
       </div>

     );
}
 
export default SingleArticle;