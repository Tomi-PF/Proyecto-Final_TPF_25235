import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export default function Header() {

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
                    </Nav>
                    <Nav>
                        {estaAutenticado && (
                            <Nav.Link as={Link} to="/administracion" className="text-white d-flex align-items-center">
                                <i className="icono-admin bi bi-gear"/>
                                <span className="ms-1">Administración</span>
                            </Nav.Link>
                        )}
                        <Nav.Link as={Link} to="/carrito" className="text-white d-flex align-items-center">
                            <i className="icono-carrito bi bi-cart"/>
                            <span className="ms-1">Carrito</span>
                        </Nav.Link>
                        {!estaAutenticado ? (
                            <Nav.Link as={Link} to="/login" className="text-white d-flex align-items-center">
                                <i className="icono-iniciar-sesion bi bi-person-circle"/>
                                <span className="ms-1">Iniciar Sesión</span>
                            </Nav.Link>
                        ): (
                            <Nav.Link className="text-white d-flex align-items-center" onClick={cerrarSesion}>
                                <i className="icono-cerrar-sesion bi bi-box-arrow-right"/>
                                <span className="ms-1">Cerrar Sesión</span>
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
