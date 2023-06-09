import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ListaNoticias = ({lista}) => {
 
    console.log('desde listanoticias:', lista)
        
    const rendercards = () => {
        return lista.map(article => {
            return <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
            {article.author}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
        })
    }

    return (
        <>
            {lista ? rendercards(): null}
        </>
    );
};

export default ListaNoticias;