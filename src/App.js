import React from 'react'
import First from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from './Card';
import './App.css'
function App() {
  return (
    <div className='App'>
        <>
        <First/>
        <h1>The movies that will be passed in our Cenema</h1>
        <div className='cards'>
        <Second title="pirate of the Carebian"    picture="https://fr.web.img3.acsta.net/medias/nmedia/18/62/88/97/18754731.jpg"/>
        <Second title="assassin creed" picture="https://upload.wikimedia.org/wikipedia/en/a/a0/Assassin%27s_Creed_film_poster.jpg"/>
        <Second title="hunger game" picture="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/MockingjayPart1Poster3.jpg/220px-MockingjayPart1Poster3.jpg"/>
        </div>
        </>
        App</div>
  )
}

export default App