import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Fox90</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Promoções</Nav.Link>
            <NavDropdown title="Blogs" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Entretenimento</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Famosos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Músicas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Rapidinha Fox</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Variedades</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Variedades</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;