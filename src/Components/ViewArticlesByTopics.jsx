import { useState, useEffect } from "react";
import { getArticles, getTopics } from "./Api";
import createdAtConvertor from "./Utils/createdAtConvertor";
import ArticleCard from "./ArticleCard";
import ViewALLArticles from "./ViewALLArticles";

const ViewArticlesByTopics = () => {
const [showTopics, setTopics] = useState()
const [isLoading, setIsLoading] = useState(true)
const [whichTopic, setWhichTopic] = useState()

useEffect(() => {
    
getTopics().then((recData) => {
    setTopics(recData)
    setIsLoading(false)
    
})
}, []);

const handleClick = (topic) => {
setWhichTopic(topic)



}


if (isLoading) return <p>Loading.....</p>
return (

    <div>
    <nav>
        <p> Topics:</p>
        {showTopics.map((topic) => {
          return  <button key={topic.slug} onClick={() => {
            handleClick(topic.slug)
          }}>< h4 className="topicPs">{topic.slug}</h4></button>
        })}
    </nav>

    <ViewALLArticles topic={whichTopic}/>
    </div>

)

}
 
export default ViewArticlesByTopics;