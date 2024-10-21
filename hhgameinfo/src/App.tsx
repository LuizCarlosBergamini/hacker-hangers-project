import { Form } from 'react-bootstrap'
import './App.css'
import GetIgdbGames from './API Calls/FetchData'

function App() {
  return (
    <>
      <Form.Label>Digite um Jogo!</Form.Label>
      <Form.Control className='py-4 px-5'
        // form.control for handling text input that is not password
        type="text"
        placeholder="Enter a game"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Escreva o nome do jogo que deseja pesquisar.
      </Form.Text>

      <GetIgdbGames />
    </>

  )
}

export default App
