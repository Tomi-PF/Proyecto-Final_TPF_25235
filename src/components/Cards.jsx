import { useState, useEffect, useContext } from "react"
import { Form } from "react-bootstrap"
import CardProducto from "./CardProducto"
import { mostrarAlertaError } from "./Mensajes"
import { CartContext } from "./CartContext"

export default function Cards(){
    
    const [productos, setProductos] = useState([])
    const [barraBusqueda, setBarraBusqueda] = useState("")
    const { agregarCarrito } = useContext(CartContext)
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

    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(barraBusqueda.toLowerCase()) || 
        producto.descripcion.toLowerCase().includes(barraBusqueda.toLowerCase())
    )

    useEffect(() => {
        obtenerProductos();
    }, []);

    if(productos.length == 0){
        return(
            <h2 className="mt-5">No hay productos para ofrecer a la venta</h2>
        )
    }

    return(
        <span>
            <Form.Control
                type="text"
                placeholder="Buscar un producto"
                className="mb-4 mt-4"
                value={barraBusqueda}
                onChange={(e) => setBarraBusqueda(e.target.value)}
            />

            <div className="productos-container">
                {
                    productosFiltrados.map((p) => (
                        <CardProducto producto={p} agregarCarrito={agregarCarrito}/>
                    ))
                }
            </div>
        </span>
    )
}
