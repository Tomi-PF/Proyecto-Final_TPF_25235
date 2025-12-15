import { Table } from "react-bootstrap"
import Boton from "./Boton"

export default function TablaCarrito({carrito, eliminarCarrito}){

    return(
        <Table striped bordered hover responsive className="mt-3">
        <thead>
            <tr className="carrito-encabezado">
                <th>Producto</th>
                <th>Imagen</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {
                carrito.map((prod) => {
                    return(
                        <tr key={prod.id}>
                            <td>{prod.nombre}</td>
                            <td>
                                <img 
                                    src={prod.imagen} 
                                    alt={prod.nombre}
                                    width={50}
                                    height={50}
                                />
                            </td>
                            <td>${Number(prod.precio).toFixed(2)}</td>
                            <td>{prod.cantidad}</td>
                            <td>${(Number(prod.precio) * prod.cantidad).toFixed(2)}</td>
                            <td>
                                <Boton 
                                    icono={"icono-quitar-carrito bi bi-cart-dash"}
                                    variante={"danger"} 
                                    texto={"Eliminar"}
                                    funcion={() => eliminarCarrito(prod.id)}
                                />
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table>
    )
}
