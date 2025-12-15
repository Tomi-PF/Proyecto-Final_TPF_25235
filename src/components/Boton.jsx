import { Button } from "react-bootstrap"

export default function Boton({variante, texto, funcion, icono}){

    return(
        <Button 
            variant={variante} 
            size="lg" 
            onClick={funcion}
        ><i className={icono}/>{texto}</Button>
    )
}
