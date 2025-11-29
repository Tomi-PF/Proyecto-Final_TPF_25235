import { useState, useEffect } from "react"
import {Spinner} from "react-bootstrap"
import CardProducto from "./CardProducto"
import { mostrarAlertaError } from "./Mensajes"

export default function Cards(){
    
    const [productos, setProductos] = useState([])

    const obtenerProductos = () => {
        fetch('https://692b58067615a15ff24f58f8.mockapi.io/api/v1/productos')
        .then((res) => res.json())
        .then((productos) => {
            setProductos(productos)
        })
        .catch(() => {
            mostrarAlertaError("Error al cargar los productos")
        })
    }

    useEffect(() => {
        obtenerProductos();
    }, []);

    if(!productos){
        return(
            <Spinner animation="border" role="status"/>
        )
    }

    return(
        <div className="productos-container">
            {
                productos.map((p) => (
                    <CardProducto producto={p}/>
                ))
            }
        </div>
    )
}
