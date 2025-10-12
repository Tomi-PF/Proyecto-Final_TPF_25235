import { Button } from "react-bootstrap"

export default function Boton({variante, texto, funcion}){

    return(
        <Button 
            variant={variante} 
            size="lg" 
            onClick={funcion} 
            style={{width:"100%"}}
        >{texto}</Button>
    )
}
