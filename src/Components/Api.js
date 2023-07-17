import axios from "axios";

export const getArticles = () => {
   
    return axios.get('https://benggs-nc-news.onrender.com/api/articles')
    .then((articles) => {
        return articles.data.articles
    })
}
 
