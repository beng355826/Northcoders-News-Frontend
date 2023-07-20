import axios from "axios";


const newsApi = axios.create({
    baseURL: 'https://benggs-nc-news.onrender.com/'
  })


export const getArticles = () => {
   
    return newsApi.get('api/articles')
    .then((articles) => {
        return articles.data.articles
    })
}

export const getSingleArticle = (articleId) => {

    return newsApi.get(`api/articles/${articleId}`)
    .then((receivedData) => {
        return receivedData.data
    })

}

export const getAssociatedComments = (articleId) => {

    return newsApi.get(`api/articles/${articleId}/comments`)
    .then((recComments) => {
        return recComments.data.comments
    })


}
 
export const patchVote = (articleId, increment) => {

    return newsApi.patch(`api/articles/${articleId}`, { inc_votes: increment })
    .then((receivedData) => {
        
        return receivedData.data

    })

}

export const postComment = (articleId, comment) => {
    return newsApi.post(`api/articles/${articleId}/comments`, {"username" : "weegembump" , "body" : comment})
    .then((receivedData) =>{
        return receivedData.data.comment
    })

}


