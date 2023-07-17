import './App.css'
import { useState } from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'
import ViewALLArticles from './Components/ViewALLArticles'

function App() {

const [topic, setTopicState] = useState([])

  return (
    <main>
    <Header/>
    <Nav topic={topic}/>
    <ViewALLArticles topic={topic}/>
    </main>
    

  )
}

export default App
