import React, { useState } from 'react';
import axios from 'axios';

const CrearCurso = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const curso = {
      nombre: nombre,
      creditos: parseInt(creditos),
      descripcion: descripcion
    };

    try {
      const response = await axios.post('https://test-deploy-12.onrender.com/cursos', curso);
      alert('Curso creado exitosamente: ' + response.data);
    } catch (error) {
      console.error('Error creando el curso:', error);
      alert('Hubo un error creando el curso');
    }
  };

  return (
    <div>
      <h2>Crear Curso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del curso:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Créditos:</label>
          <input
            type="number"
            value={creditos}
            onChange={(e) => setCreditos(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CrearCurso;
