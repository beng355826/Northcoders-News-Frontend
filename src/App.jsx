import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import {Routes, Route, ScrollRestoration} from 'react-router-dom'
import Header from './Components/Header'
import Nav from './Components/Nav'
import ViewALLArticles from './Components/ViewALLArticles'
import ViewArticlesByTopics from './Components/ViewArticlesByTopics'
import SingleArticle from './Components/SingleArticle'

function App() {

  return (
    <main>
    <Header/>
    <Routes>
    <Route path="/" element={<ViewArticlesByTopics />} />
    <Route path="/topics" element={<ViewArticlesByTopics />} />
    <Route path="/topics/:topic" element={<ViewArticlesByTopics />} />
    <Route path="/:article_id" element={<SingleArticle />} />
    </Routes>
    
    </main>
    
  )
}

export default App
