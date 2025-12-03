import { Container } from "react-bootstrap"

export default function Footer(){
    return(
        <footer className="bg-dark text-white py-3 mt-5 footer">
            <Container>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h5>Aterrizar Ya</h5>
                        <p className="mb-2">Calle Falsa 123</p> 
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <a 
                            href="https://www.whatsapp.com"
                            target="_blank"
                            className="me-3 text-white"
                        ><i className="icono-whatsapp bi bi-whatsapp"/></a>
                        <a 
                            href="https://www.facebook.com" 
                            target="_blank" 
                            className="me-3 text-white"
                        ><i className="icono-facebook bi bi-facebook"/></a>
                        <a 
                            href="https://www.instagram.com" 
                            target="_blank" 
                            className="me-3 text-white"
                        ><i className="icono-instagram bi bi-instagram"/></a>
                        <a 
                            href="https://x.com" 
                            target="_blank" 
                            className="me-3 text-white"
                        ><i className="icono-x bi bi-twitter-x"/></a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
