import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import RichTextRenderer from '../../molecules/RichTextRenderer/RichTextRenderer';

export interface CardPeliculaProps {
  title: string;
  description: string;
  image: string;
  entryId: string
}

function CardPelicula( { title, description, image, entryId  }: Readonly<CardPeliculaProps>) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pelicula/${entryId}`);
  }



  return (
    <Card style={{ width: '18rem', margin: '10px' }} role='article' aria-labelledby={`card-title-${entryId}`} aria-describedby={`card-description-${title}`}>
      <Card.Img variant="top" src={image} alt={`Póster de la película ${title}`} />
      <Card.Body>
        <Card.Title id={`card-title-${title}`} tabIndex={0}>{title}</Card.Title>
        {/* <Card.Text>
          {description}
        </Card.Text> */}
        <RichTextRenderer richTextDocument={description} />
        <Button variant="primary" onClick={handleClick} aria-label='Ir a la página de la película'>Ir a la película</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPelicula;