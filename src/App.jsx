import './App.css'
import { useState } from 'react'
import {Routes, Route, ScrollRestoration} from 'react-router-dom'
import Header from './Components/Header'
import Nav from './Components/Nav'
import ViewALLArticles from './Components/ViewALLArticles'
import SingleArticle from './Components/SingleArticle'

function App() {

const [topic, setTopicState] = useState([])

  return (
    <main>
    <Header/>
    <Nav topic={topic}/>
    <Routes>
    <Route path="/" element={<ViewALLArticles topic={topic}/>} />
    <Route path="/:article_id" element={<SingleArticle topic={topic}/>} />
    </Routes>
    
    </main>
    
  )
}

export default App
