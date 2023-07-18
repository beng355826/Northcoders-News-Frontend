import axios from "axios";

export const getArticles = () => {
   
    return axios.get('https://benggs-nc-news.onrender.com/api/articles')
    .then((articles) => {
        return articles.data.articles
    })
}

export const getSingleArticle = (articleId) => {

    return axios.get(`https://benggs-nc-news.onrender.com/api/articles/${articleId}`)
    .then((receivedData) => {
        return receivedData.data
    })

}
 
