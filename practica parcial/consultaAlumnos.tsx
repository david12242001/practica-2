import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsultaAlumnos = () => {
  const [alumnos, setAlumnos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await axios.get('https://test-deploy-12.onrender.com/alumnos');
        setAlumnos(response.data);
      } catch (err) {
        setError('Error al obtener los alumnos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumnos();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Consulta de Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>{alumno.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultaAlumnos;
