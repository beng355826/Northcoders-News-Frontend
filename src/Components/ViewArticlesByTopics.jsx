import { useState, useEffect  } from "react";
import { Link , useParams, useSearchParams } from 'react-router-dom'
import { getTopics } from "./Api";
import ViewALLArticles from "./ViewALLArticles";
import capitalise from "./Utils/capitalise";


const ViewArticlesByTopics = (props) => {
const [searchParams, setSearchParams] = useSearchParams()
const sortBy = searchParams.get('sort_by')
const orderBy = searchParams.get('order')

const [showTopics, setTopics] = useState()
const [isLoading, setIsLoading] = useState(true)



useEffect(() => {
    
getTopics().then((recData) => {
    setTopics(recData)
    setIsLoading(false)
    
})
}, []);

const setSortBy = (option) => {

  const newParams = new URLSearchParams(searchParams)
  newParams.set('sort_by', option);
  setSearchParams(newParams)
}

const setOrderBy = (order) => {

  const newParams = new URLSearchParams(searchParams)
  newParams.set('order', order);
  setSearchParams(newParams)
}



if (isLoading) return <p>Loading.....</p>
return (

    <div>
      
    <nav>
      <p>Filter by topic:</p>
        <Link to={'/topics/'} className="topics"> All</Link>
        {showTopics.map((topic) => {
          return <Link to={`/topics/${topic.slug}`} key={topic.slug} className="topics"> {capitalise(topic.slug)} </Link>
        })}
    </nav>
    <nav>
      <label>Sort By...</label>
      <select onChange={(e) => {

        if(e.target.value === 'Date') {setSortBy('created_at')}
        else if(e.target.value === 'Number of comments'){setSortBy('comment_count')}
        else if(e.target.value === 'Votes'){setSortBy('votes')}
        else{setSortBy("")}

      }}>
        <option>No sort_by</option>
        <option>Date</option>
        <option>Number of comments</option>
        <option>Votes</option>
        </select>
    </nav>
    <nav>
      <label>Order...</label>
      <select onChange={(e) => {

        if(e.target.value === "Ascending"){setOrderBy('asc')}
        else{setOrderBy('desc')}

      }}>
        <option>Descending</option>
        <option>Ascending</option>
      </select>
    </nav>

    <ViewALLArticles sortBy={sortBy} orderBy={orderBy} />
    </div>

)

}
 
export default ViewArticlesByTopics;


