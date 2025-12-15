import { useContext } from "react"
import { Container } from "react-bootstrap"
import { CartContext } from "../components/CartContext"
import TablaCarrito from "../components/TablaCarrito"
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
            <Boton 
                variante={"danger"} 
                texto={"Vaciar carrito"} 
                funcion={() => vaciarCarrito()}
            />
            <TablaCarrito carrito={carrito} eliminarCarrito={eliminarCarrito}/>
            <h5 className="text-end">Total a pagar: <b>${total.toFixed(2)}</b></h5>
        </Container>
    )
}
