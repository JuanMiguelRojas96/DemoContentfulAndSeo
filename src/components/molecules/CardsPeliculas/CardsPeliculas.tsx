import CardPelicula, { CardPeliculaProps } from "../../atoms/Card/CardPelicula"


export interface CardsPeliculasProps {
  peliculas: CardPeliculaProps[]
}



const CardsPeliculas = (peliculas: CardsPeliculasProps) => {
  return (
    <>
      {peliculas.peliculas.map((pelicula, index) => {
        return (
          <CardPelicula
            key={index}
            title={pelicula.title}
            description={pelicula.description}
            image={pelicula.image}
            entryId={pelicula.entryId}
          />
        )
      })}
    </>
  )
}

export default CardsPeliculas
