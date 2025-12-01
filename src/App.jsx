import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Importación de los componentes */
import Header from './components/Header';
import Footer from './components/Footer'
import RutaProtegida from './components/RutaProtegida';
import { CartProvider } from './components/CartContext';

/* Importación de las secciones */
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import Carrito from "./pages/Carrito"
import Administracion from "./pages/Administracion"
import Login from "./pages/Login"

function App() {

    return (
        <CartProvider>
            <Router basename='/Proyecto-Final_TPF_25235'>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Inicio/>}/>
                        <Route path='/productos' element={<Productos/>}/>
                        <Route path='/carrito' element={<Carrito/>}/>
                        <Route path='/administracion' element={
                            <RutaProtegida>
                                <Administracion/>
                            </RutaProtegida>
                        }/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </Router>
        </CartProvider>
    )
}

export default App
