import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Peliculas from '../pages/Peliculas/Peliculas';
import Pelicula from '../pages/Pelicula/Pelicula';
import PeliculasGraphQL from '../pages/PeliculasGraphQL/PeliculasGraphQL';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/peliculas" element={<Peliculas />} />
    <Route path="/peliculas-con-graphql" element={<PeliculasGraphQL />} />
    <Route path="/pelicula/:entryId" element={<Pelicula />} />
  </Routes>
);

export default AppRoutes;
