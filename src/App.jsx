import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/* Importación de los componentes */
import Header from './components/Header';
import Footer from './components/Footer'

/* Importación de las secciones */
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import Carrito from "./pages/Carrito"

function App() {

    return (
        <Router>
            <Header/>
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/productos' element={<Productos/>}/>
                    <Route path='/carrito' element={<Carrito/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Router>
    )
}

export default App
