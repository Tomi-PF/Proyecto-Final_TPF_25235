import {Navigate} from "react-router-dom"

export default function RutaProtegida({children}){

    const estaAutenticado = localStorage.getItem('auth') === 'true'

    return estaAutenticado ? children : <Navigate to="/login"/>
}
