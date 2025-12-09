import { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Boton from './Boton'
import MensajeToast from './MensajeToast'
import { mostrarAlertaExito, mostrarAlertaError } from './Mensajes'

const API_URL="https://692b58067615a15ff24f58f8.mockapi.io/api/v1/productos"

export default function CardProducto({producto, agregarCarrito, actualizarProductos}){

    const [mostrarToast, setMostrarToast] = useState(false)

    const manejarAgregado = (stock, producto) => {

        if(stock){
            const metodo = "PUT"
            const url = `${API_URL}/${producto.id}`
            const producto_modificado = {
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                imagen: producto.imagen,
                precio: Number(producto.precio),
                stock: Number(Number(producto.stock) - 1)
            }

            fetch(url, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto_modificado)
            })
            .then((res) => {
                if(res.ok){
                    agregarCarrito(producto)
                    mostrarAlertaExito("Producto agregado al carrito correctamente")
                    setMostrarToast(true)
                    actualizarProductos()
                }
                return res.json()
            })
            .catch(() => {
                mostrarAlertaError("Error al agregar un producto al carrito")
            })

        } else {
            mostrarAlertaError("No se puede agregar este producto al carrito por falta de stock")
        }
    }

    return(
        <div>
            <Card key={producto.id} className='card-producto'>
                <Card.Img 
                    variant="top" 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="card-imagen"
                />
                <Card.Body>
                    <Card.Title className='card-title'>{producto.nombre}</Card.Title>
                    <Card.Text className='card-text'>{producto.descripcion}</Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item>Stock: <b>{producto.stock}</b></ListGroup.Item>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio: <b>${producto.precio}</b></ListGroup.Item>
                </ListGroup>
                <Card.Body className='card-body'>
                    {producto.stock != 0 ? (
                        <Boton 
                            icono={"icono-agregar-carrito bi bi-cart-plus"}
                            variante={"primary"} 
                            texto={"Agregar al carrito"} 
                            funcion={() => manejarAgregado(true, producto)}
                        />
                    ) : (
                        <Boton
                            icono={"icono-agregar-carrito bi bi-cart-plus"}
                            variante={"secondary"}
                            texto={"Agregar al carrito"}
                            funcion={() => manejarAgregado(false, producto)}
                        />
                    )}
                </Card.Body>
            </Card>
            <MensajeToast 
                producto={producto} 
                mostrar={mostrarToast} 
                setMostrar={setMostrarToast}
            />
        </div>
    )    
}
