import React from 'react';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const Noticias = (noticias) => {
    return (
        <>
            <Form.Select aria-label="Default select example">
      <option>Seleccione una seccion de noticias</option>
      <option value="1">Noticias</option>
      <option value="2">Deporte</option>
      <option value="3">Policiales</option>
    </Form.Select>
        </>
    );
};

export default Noticias;