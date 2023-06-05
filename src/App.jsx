import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Noticias from './components/Noticias';
import './App.css'

function App() {
  

  return (
    <>
      <Container className='my-5 main'>
        <section>
        <h1 className='text-center display-4'>Noticias</h1>
        <hr/>
        </section>
        <Noticias></Noticias>
      </Container>
    </>
  )
}

export default App
