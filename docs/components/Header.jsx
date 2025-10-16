import {Container, Nav, Navbar} from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"

function Header() {

    const navigate = useNavigate()
    const estaAutenticado = localStorage.getItem('auth') === 'true'

    const cerrarSesion = () => {
        localStorage.removeItem('auth')
        navigate('/')
    }

    return(
        <Navbar collapseOnSelect expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{width: 50}} src="https://github.com/Tomi-PF/Proyecto-Final_TPF_25235/blob/main/src/assets/Logo.jpg?raw=true" alt="Logo de Aterrizar Ya"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos" className="text-white">Productos</Nav.Link>
                        {estaAutenticado && (
                            <Nav.Link as={Link} to="/perfil" className="text-white">Perfil</Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/carrito" className="text-white d-flex align-items-center">
                            <ion-icon size="large" name="cart-outline"></ion-icon>
                            <span className="ms-1">Carrito</span>
                        </Nav.Link>
                        {!estaAutenticado ? (
                            <Nav.Link as={Link} to="/login" className="text-white d-flex align-items-center">
                                <ion-icon size="large" name="person-circle-outline"></ion-icon>
                                <span className="ms-1">Iniciar Sesión</span>
                            </Nav.Link>
                        ): (
                            <Nav.Link className="text-white d-flex align-items-center" onClick={cerrarSesion}>
                                <ion-icon size="large" name="log-out-outline"></ion-icon>
                                <span className="ms-1">Cerrar Sesión</span>
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
