import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Noticias from './components/Noticias';
import ListaNoticias from './components/ListaNoticias';
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [noticias, setNoticias] = useState({});
  const [buscar, setBuscar] = useState({})


  useEffect(()=>{
    consultarNoticias();
  }, [buscar]);

  const consultarNoticias = async ()=>{

    try {

    const respuesta = await fetch(`https://newsapi.org/v2/everything?q=${buscar}&apiKey=a29872ae476341faa216cd80191011d9`);
    const dato =  await respuesta.json();
    
    console.log(respuesta);
    console.log(dato);
      setNoticias(dato);
    }catch(error){
      console.log(error);
    }
  }
  const onHandleChange = (value)=>{
    console.log(value)
    setBuscar(value)
  }
  return (
    <>
      <Container className='my-5 main'>
        <section>
        <h1 className='text-center display-4'>Noticias</h1>
        <hr/>
        </section>
        <Noticias noticias={noticias} onHandleChange={onHandleChange} />
        {noticias.articles ? <ListaNoticias lista={noticias.articles}/>: 'no hay articulo'}
      </Container>
    </>
  )
}

export default App
