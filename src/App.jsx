import { useEffect, useState } from 'react'
import axios from 'axios'
import Anime from './components/Anime'
import './App.css'

const api = axios.create({
  baseURL: 'https://animetowatch.onrender.com',
  // baseURL: 'http://localhost:3000',
})

function App() {

  const [anime, setAnime] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  const [currentAnime, setCurrentAnime] = useState(0)

  const getAnime = async () => {

    await api.get('/').then(res => {
      setAnime(res.data)

    }).catch(err => console.log(err))

    setDataLoaded(true)
  }

  function nextAnime() {
    if (currentAnime < anime.length - 1) {
      setCurrentAnime(currentAnime + 1)
    }
  }

  function previousAnime() {
    if (currentAnime > 0) {
      setCurrentAnime(currentAnime - 1)
    }
  }

  useEffect(() => {
    getAnime()
  }, [])

  if (!dataLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">

      { dataLoaded && (
        <Anime key={anime.id} data={anime[currentAnime]} nextAnime={nextAnime} previousAnime={previousAnime} />
      )}  
    </div>
  )
}

export default App
