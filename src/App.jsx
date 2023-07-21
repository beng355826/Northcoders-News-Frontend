import './App.css'
import { useState } from 'react'
import {Routes, Route, ScrollRestoration} from 'react-router-dom'
import Header from './Components/Header'
import Nav from './Components/Nav'
import ViewALLArticles from './Components/ViewALLArticles'
import ViewArticlesByTopics from './Components/ViewArticlesByTopics'
import SingleArticle from './Components/SingleArticle'
import ViewArticlesByTopic from './Components/TopicsArticles'

function App() {

  return (
    <main>
    <Header/>
    <Nav/>
    <Routes>
    <Route path="/" element={<ViewALLArticles/>} />
    <Route path="/topics" element={<ViewArticlesByTopics />} />
    <Route path="/topics/:topic" element={<ViewArticlesByTopics />} />
    <Route path="/:article_id" element={<SingleArticle />} />
    </Routes>
    
    </main>
    
  )
}

export default App
