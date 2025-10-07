import {Container, Nav, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"
import Logo from "../assets/Logo.jpg"

function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{width: 50}} src={Logo} alt="Logo de Aterrizar Ya"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos" className="text-white">Productos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/carrito" className="text-white d-flex align-items-center">
                            <ion-icon size="large" name="cart-outline"></ion-icon>
                            <span className="ms-1">Carrito</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
