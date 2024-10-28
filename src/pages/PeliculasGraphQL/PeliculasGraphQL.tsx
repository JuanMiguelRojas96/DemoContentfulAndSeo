import { useEffect, useState } from 'react';
import CardsPeliculas from '../../components/molecules/CardsPeliculas/CardsPeliculas'
import { getAllEntriesByContentType } from '../../services/ContentfulGraphqlService';
import { CardPeliculaProps } from '../../components/atoms/Card/CardPelicula';
import { Helmet } from 'react-helmet-async'
// import useSEO from '../../hooks/useSEO';

const PeliculasGraphQL = () => {

  const [peliculas, setPeliculas] = useState<CardPeliculaProps[]>([]);

  // useSEO('Peliculas GraphQL', 'Todas las peliculas de la app' );


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
    <main className="peliculas">
      <Helmet>
        <title>Peliculas GraphQL | AppPelículas</title>
      </Helmet>
      <CardsPeliculas peliculas={peliculas} />
    </main>
  )
}

export default PeliculasGraphQL
