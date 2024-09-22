import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CrearCurso from './components/CrearCurso';
import ConsultaAlumnos from './components/ConsultaAlumnos';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/crear-curso">Crear Curso</Link>
            </li>
            <li>
              <Link to="/consulta-alumnos">Consulta de Alumnos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/crear-curso" element={<CrearCurso />} />
          <Route path="/consulta-alumnos" element={<ConsultaAlumnos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
