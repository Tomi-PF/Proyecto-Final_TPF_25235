import { Container } from "react-bootstrap"

export default function Usuario(){

    const nombreUsuario = localStorage.getItem('user')

    return(
        <Container className="mt-4">
            <h1>Perfil de usuario</h1>
            <h2><b>Usuario:</b> {nombreUsuario}</h2>
        </Container>
    )
}
