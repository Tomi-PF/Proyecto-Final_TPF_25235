import { useContext } from "react"
import { Container, Table } from "react-bootstrap"
import { CartContext } from "../components/CartContext"
import Boton from "../components/Boton"

export default function Carrito(){

    const { carrito, eliminarCarrito } = useContext(CartContext)
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
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.map((prod) => {
                            return(
                                <tr key={prod.id}>
                                    <td>{prod.nombre}</td>
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
