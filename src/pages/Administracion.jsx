import { Container } from "react-bootstrap"

export default function Usuario(){

    const nombreUsuario = localStorage.getItem('user')

    return(
        <Container className="mt-4">
            <h1>Sección de administración</h1>
        </Container>
    )
}
