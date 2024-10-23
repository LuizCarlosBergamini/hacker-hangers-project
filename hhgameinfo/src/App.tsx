import './App.css'
import VideoGalaxyBg from './Components/VideoBg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Input from './Components/Input'
import GameCard from './Components/GameCard'

function App() {
  return (
    <>
      <VideoGalaxyBg />
      <div className='bg-black w-100 h-100 position-absolute bg-opacity-75'></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Input />} />
          <Route path='/game/:id' element={<GameCard />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
