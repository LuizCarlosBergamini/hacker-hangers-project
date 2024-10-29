import './App.css'
import VideoGalaxyBg from './Components/VideoBg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Eventos from './Components/Eventos'
import InputPage from './Pages/InputPage'
import GameCardPage from './Pages/GameCardPage'
import Companies from './Components/Companies'

function App() {
  return (
    <>
      <VideoGalaxyBg />
      <div className='bg-black w-100 h-100 bg-opacity-75 position-fixed top-0 start-0'></div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<InputPage />} />
          <Route path='/game/:id' element={<GameCardPage />} />
          <Route path='/eventos' element={<Eventos />} />
          <Route path='/companies' element={<Companies />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
