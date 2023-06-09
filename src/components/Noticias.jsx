import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ListaNoticias from './ListaNoticias';

const Noticias = ({onHandleChange}) => {
    return (
        <>
            <Form.Select onChange={(e)=>  onHandleChange(e.target.value)} aria-label="Default select example">
                
      <option>Seleccione una seccion de noticias</option>
      <option value="mundo">Mundo</option>
      <option value="deporte">Deporte</option>
      <option value="policiales">Policiales</option>
      
    </Form.Select>
        </>
    );
};

export default Noticias;