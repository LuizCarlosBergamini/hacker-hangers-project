import { Form } from 'react-bootstrap'
import './App.css'
import VideoGalaxyBg from './Components/VideoBg'
import Input from './Components/Input'

function App() {
  return (
    <div>
      <VideoGalaxyBg />
      <div className='bg-black w-100 h-100 position-absolute bg-opacity-75'></div>
      <Input />
    </div>

  )
}

export default App
