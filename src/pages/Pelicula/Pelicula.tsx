import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContent } from "../../services/ContentfulService";
import { CardPeliculaProps } from "../../components/atoms/Card/CardPelicula";
import "./Pelicula.scss";
import { Helmet } from "react-helmet-async";
// import useSEO from "../../hooks/useSEO";

const Pelicula = () => {
  const [pelicula, setPelicula] = useState<CardPeliculaProps>();
  const title = pelicula?.title ?? "";
  const description = `Pelicula ${pelicula?.description ?? ""}`;

  // useSEO(title, description);

  const { entryId } = useParams<{ entryId: string }>();

  useEffect(() => {
    const fetchEntrie = async () => {
      if (entryId !== undefined) {
        try {
          const data = await getContent(entryId);
          setPelicula(data);
        } catch (error) {
          console.error("Error fetching entries:", error);
        }
      } else {
        console.error("No se proporcionó el parámetro entryId");
      }
    };
  
    fetchEntrie();
  }, [entryId]);

  return (
    <main className="pelicula" role="main" aria-labelledby="pelicula__title">
      <Helmet>
        <title>{title} | AppPelículas</title>
        <meta name="description" content={description} />
        <meta name ="rating" content="General"/>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://app-peliculas.vercel.app/pelicula/${entryId}`} />
      </Helmet>
      <figure className="pelicula__image">
        <img src={pelicula?.image} alt={`Póster de la película ${pelicula?.title}`} />
      </figure>
      <section  className="pelicula__content">
        <article>
          <h2 className="pelicula__title" id="pelicula__title">{pelicula?.title}</h2>
          <p className="pelicula__description">{pelicula?.description}</p>
        </article>
      </section>
    </main>
  );
};

export default Pelicula;
