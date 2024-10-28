import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const AppNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Peliculas App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/peliculas">Peliculas</Nav.Link>
            <Nav.Link as={NavLink} to="/peliculas-con-graphql">Peliculas con GraphQL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default AppNavbar
