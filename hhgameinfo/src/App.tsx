import './App.css'
import VideoGalaxyBg from './Components/VideoBg'
import Input from './Components/Input'
import GameCard from './Components/GameCard'

function App() {
  return (
    <div>
      <VideoGalaxyBg />
      <div className='bg-black w-100 h-100 position-absolute bg-opacity-75'></div>
      <main className='d-flex flex-column align-items-center justify-content-center'>
        <Input />
        <GameCard />
      </main>
    </div>

  )
}

export default App
