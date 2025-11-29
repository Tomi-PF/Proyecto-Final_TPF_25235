import { useState, useEffect } from "react"
import CardProducto from "./CardProducto"
import { mostrarAlertaError } from "./Mensajes"

export default function Cards(){
    
    const [productos, setProductos] = useState([])
    const API_URL="https://692b58067615a15ff24f58f8.mockapi.io/api/v1/productos"

    const obtenerProductos = () => {
        fetch(API_URL)
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

    if(productos.length == 0){
        return(
            <h2 className="mt-5">No hay productos para ofrecer a la venta</h2>
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
