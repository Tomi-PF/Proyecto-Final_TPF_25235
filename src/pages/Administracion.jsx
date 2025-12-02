import { useState, useEffect } from "react"
import { Table, Form, Modal } from "react-bootstrap"
import { mostrarAlertaError, confirmarEleccion } from "../components/Mensajes"
import Boton from "../components/Boton"

const API_URL="https://692b58067615a15ff24f58f8.mockapi.io/api/v1/productos"

export default function Administracion(){

    const [productos, setProductos] = useState([])
    const [mostrar, setMostrar] = useState(false)
    const [formulario, setFormulario] = useState({nombre: "", descripcion: "", imagen: "", precio: ""})
    const [idEditar, setIdEditar] = useState(null)

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

    const cerrarModal = () => {
        setMostrar(false)
        setFormulario({nombre: "", descripcion: "", imagen: "", precio: ""})
        setIdEditar(null)
    }

    const abrirModal = (producto) => {
        setMostrar(true)
        if(producto){
            setFormulario({
                ...producto,
                precio: Number(producto.precio)
            })
        }
        setIdEditar(producto.id)
    }    
    
    const manejarEnvio = (e) => {
        e.preventDefault()

        const datosProducto = {
            nombre: formulario.nombre,
            descripcion: formulario.descripcion,
            imagen: formulario.imagen,
            precio: Number(formulario.precio)
        }
        const metodo = idEditar ? "PUT" : "POST"
        const url = idEditar ? `${API_URL}/${idEditar}` : API_URL

        fetch(url, {
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosProducto)
        })
        .then((res) => {
            if(!res.ok){
                if(metodo == "PUT"){
                    mostrarAlertaError("Error al guardar los datos editados del producto")
                }else{
                    mostrarAlertaError("Error al crear el producto")
                }
            }
            return res.json()
        })
        .then(() => {
            cerrarModal()
            obtenerProductos()
        })
        .catch(() => {
            mostrarAlertaError("Error al crear o editar un producto")
        })
    }

    const eliminarProducto = (id) => {
        confirmarEleccion("¿Desea eliminar el producto?", "Eliminar").then((confirmado) => {
            if(confirmado){
                fetch(`${API_URL}/${id}`, {
                    method: "DELETE"
                })
                .then((res) => {
                    if(!res.ok){
                        mostrarAlertaError("Error al eliminar el producto")
                    }
                    obtenerProductos()
                })
                .catch(() => {
                    mostrarAlertaError("Error al eliminar el producto")
                })
            }
        })
    }

    useEffect(() => {
        obtenerProductos()
    }, [])

    return(
        <div className="container mt-4">
            <h2 className="mb-4">Administración de productos</h2>
            <Boton 
                variante={"info"} 
                texto={"Agregar producto"} 
                funcion={abrirModal}
            />
            {
                productos.length != 0 ? (
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr className="admin-encabezado">
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map((prod) => {
                                    return(
                                        <tr key={prod.id}>
                                            <td>{prod.nombre}</td>
                                            <td>{prod.descripcion}</td>
                                            <td>${Number(prod.precio).toFixed(2)}</td>
                                            <td>
                                                <img 
                                                    src={prod.imagen} 
                                                    alt={prod.nombre} 
                                                    width={50} 
                                                    height={50}
                                                />
                                            </td>
                                            <td>
                                                <span className="admin-boton-editar">
                                                    <Boton 
                                                        variante={"warning"} 
                                                        texto={"Editar"} 
                                                        funcion={() => abrirModal(prod)} 
                                                    />    
                                                </span>
                                                <span className="admin-boton-eliminar">
                                                    <Boton 
                                                        variante={"danger"} 
                                                        texto={"Eliminar"} 
                                                        funcion={() => eliminarProducto(prod.id)} 
                                                    />
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                ) : (
                    null
                )
            }

            <Modal show={mostrar} onHide={cerrarModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{idEditar ? "Editar" : "Agregar"} Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={manejarEnvio}>

                        <Form.Group className="mb-2">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                value={formulario.nombre}
                                onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                value={formulario.descripcion}
                                onChange={(e) => setFormulario({...formulario, descripcion: e.target.value})}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                value={formulario.precio}
                                onChange={(e) => setFormulario({...formulario, precio: Number(e.target.value)})}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Imagen (URL)</Form.Label>
                            <Form.Control
                                value={formulario.imagen}
                                onChange={(e) => setFormulario({...formulario, imagen: e.target.value})}
                            />
                        </Form.Group>

                        <Boton 
                            variante={"info"} 
                            texto={"Guardar"} 
                            funcion={manejarEnvio} 
                            type="submit"
                        />
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
