import axios from "axios";


const newsApi = axios.create({
    baseURL: 'https://benggs-nc-news.onrender.com/'
  })


export const getArticles = (topic) => {
   
    if(!topic){
    return newsApi.get('api/articles')
    .then((articles) => {
        return articles.data.articles
    })
    }

    else{
        return newsApi.get(`api/articles?topic=${topic}`)
        .then((articles) => {
            return articles.data.articles
        })

    }
    
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

export const getTopics = () => {

    return newsApi.get('api/topics')
    .then((recData) => {

        return recData.data.AllTopics

    })

}


