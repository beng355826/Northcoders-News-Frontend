import { useState, useEffect  } from "react";
import { Link , useParams } from 'react-router-dom'
import { getTopics } from "./Api";
import ViewALLArticles from "./ViewALLArticles";
// import capitalise from "./Utils/capitalise";


const ViewArticlesByTopics = (props) => {
const [showTopics, setTopics] = useState()
const [isLoading, setIsLoading] = useState(true)



useEffect(() => {
    
getTopics().then((recData) => {
    setTopics(recData)
    setIsLoading(false)
    
})
}, []);



if (isLoading) return <p>Loading.....</p>
return (

    <div>
    <nav >
        <p> Topics:</p>
        {showTopics.map((topic) => {
          return <Link to={`/topics/${topic.slug}`} key={topic.slug} className="topics"> {topic.slug} </Link>
        })}
    </nav>

    <ViewALLArticles />
    </div>

)

}
 
export default ViewArticlesByTopics;