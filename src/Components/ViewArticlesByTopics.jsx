import { useState, useEffect  } from "react";
import { Link , useParams, useSearchParams } from 'react-router-dom'
import { getTopics } from "./Api";
import ViewALLArticles from "./ViewALLArticles";
import capitalise from "./Utils/capitalise";


const ViewArticlesByTopics = (props) => {
const [showTopics, setTopics] = useState()
const [isLoading, setIsLoading] = useState(true)

const [searchParams, setSearchParams] = useSearchParams()

const sortBy = searchParams.get('sort_by')
const order = searchParams.get('order')


const setSortBy = (option) => {
console.log(option)
  const newParams = new URLSearchParams(searchParams)
  newParams.set('sort_by', option);
  setSearchParams(newParams)

}

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
          return <Link to={`/topics/${topic.slug}`} key={topic.slug} className="topics"> {capitalise(topic.slug)} </Link>
        })}
    </nav>
    <nav>
      <select>
        <option></option>
        <option onChange={setSortBy('date')}>date</option>
        <option onChange={setSortBy('comment_count')}>comment_count</option>
        <option onChange={setSortBy('votes')}>votes</option>
      </select>
    </nav>
    <nav>
      <select>
        <option>Ascending</option>
        <option>Descending</option>
      </select>
    </nav>

    <ViewALLArticles sortBy={sortBy} order={order} />
    </div>

)

}
 
export default ViewArticlesByTopics;