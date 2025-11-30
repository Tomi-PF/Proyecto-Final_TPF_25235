import { Button } from "react-bootstrap"

export default function Boton({variante, texto, funcion}){

    return(
        <Button 
            variant={variante} 
            size="lg" 
            onClick={funcion}
        >{texto}</Button>
    )
}
