import { useEffect, useState } from 'react'
import { getAllEntriesByContentType } from '../../services/ContentfulService';
import CardsPeliculas from '../../components/molecules/CardsPeliculas/CardsPeliculas';
import { CardPeliculaProps } from '../../components/atoms/Card/CardPelicula';
import './Peliculas.scss'
import { Helmet } from 'react-helmet-async'
// import useSEO from '../../hooks/useSEO';

const Peliculas = () => {

  const [peliculas, setPeliculas] = useState<CardPeliculaProps[]>([]);

  // useSEO('Peliculas', 'Todas las peliculas de la app' );

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getAllEntriesByContentType('blogPage');
        setPeliculas(data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };
  
    fetchEntries();
  }, []);


  return (
    <main className="peliculas" role="main">
      <Helmet>
        <title>Peliculas | AppPelículas</title>
      </Helmet>
      <CardsPeliculas peliculas={peliculas} />
    </main>
  );
}

export default Peliculas
