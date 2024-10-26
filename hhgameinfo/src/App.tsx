import './App.css'
import VideoGalaxyBg from './Components/VideoBg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Input from './Components/Input'
import GameCard from './Components/GameCard'
import Header from './Components/Header'
import Eventos from './Components/Eventos'

function App() {
  return (
    <>
      <VideoGalaxyBg />
      <div className='bg-black w-100 h-100 position-absolute bg-opacity-75'></div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Input />} />
          <Route path='/game/:id' element={<GameCard />} />
          <Route path='/eventos' element={<Eventos />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
