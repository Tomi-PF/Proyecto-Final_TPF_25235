import { useState, useEffect } from "react"
import { mostrarAlertaError, confirmarEleccion } from "../components/Mensajes"
import Boton from "../components/Boton"
import TablaAdministracion from "../components/TablaAdministracion"
import ModalAdministracion from "../components/ModalAdministracion"

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
                texto={"Crear nuevo producto"} 
                funcion={abrirModal}
            />

            {
                productos.length != 0 ? (
                    <TablaAdministracion 
                        productos={productos} 
                        abrirModal={abrirModal} 
                        eliminarProducto={eliminarProducto}
                    />
                ) : (
                    null
                )
            }

            <ModalAdministracion 
                mostrar={mostrar}
                idEditar={idEditar}
                formulario={formulario}
                setFormulario={setFormulario}
                cerrarModal={cerrarModal}
                manejarEnvio={manejarEnvio}
            />

        </div>
    )
}
