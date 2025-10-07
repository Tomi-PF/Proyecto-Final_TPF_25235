import {Container} from "react-bootstrap"

export default function Footer(){
    return(
        <footer className="bg-dark text-white py-3 mt-5 fixed-bottom">
            <Container>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h5>Aterrizar Ya</h5>
                        <p className="mb-2">Calle Falsa 123</p> 
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <a href="https://www.facebook.com" target="_blank" className="me-3 text-white">
                            <ion-icon size="large" name="logo-facebook"></ion-icon>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="me-3 text-white">
                            <ion-icon size="large" name="logo-instagram"></ion-icon>
                        </a>
                        <a href="https://x.com" target="_blank" className="me-3 text-white">
                            <ion-icon size="large" name="logo-twitter"></ion-icon>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
