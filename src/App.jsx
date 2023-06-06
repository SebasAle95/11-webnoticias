import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Noticias from './components/Noticias';
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [noticias, setNoticias] = useState({});

  useEffect(()=>{
    consultarNoticias();
  }, []);

  const consultarNoticias = async ()=>{

    try {

    const respuesta = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-05-06&sortBy=publishedAt&apiKey=a29872ae476341faa216cd80191011d9');
    const dato =  await respuesta.json();
    console.log(respuesta);
    console.log(dato);
      setNoticias(dato);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <Container className='my-5 main'>
        <section>
        <h1 className='text-center display-4'>Noticias</h1>
        <hr/>
        </section>
        <Noticias noticias={noticias} />
      </Container>
    </>
  )
}

export default App
