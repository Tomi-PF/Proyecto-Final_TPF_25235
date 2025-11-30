import { useContext } from "react"
import { Container, Table } from "react-bootstrap"
import { CartContext } from "../components/CartContext"
import Boton from "../components/Boton"

export default function Carrito(){

    const { carrito, eliminarCarrito, vaciarCarrito } = useContext(CartContext)
    const total = carrito.reduce((acc, item) => acc + Number(item.precio) * item.cantidad, 0)

    if(carrito.length === 0){
        return(
            <Container className="mt-4">
                <h3>El carrito esta vacío</h3>
            </Container>
        )
    }

    return(
        <Container className="mt-4">
            <h3>Carrito de compras</h3>
            <Boton variante={"danger"} texto={"Vaciar carrito"} funcion={() => vaciarCarrito()}/>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr style={{textAlign: "center"}}>
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
                                            style={{objectFit: "cover"}} 
                                        />
                                    </td>
                                    <td>${Number(prod.precio).toFixed(2)}</td>
                                    <td>{prod.cantidad}</td>
                                    <td>${(Number(prod.precio) * prod.cantidad).toFixed(2)}</td>
                                    <td>
                                        <Boton 
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
            <h5 className="text-end">Total a pagar: <b>{total.toFixed(2)}</b></h5>
        </Container>
    )
}
