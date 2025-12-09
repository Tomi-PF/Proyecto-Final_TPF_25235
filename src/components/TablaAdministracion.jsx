import { Table } from "react-bootstrap"
import Boton from "./Boton"

export default function TablaAdministracion({productos, abrirModal, eliminarProducto}){

    return(
        <Table striped bordered hover className="mt-4">
            <thead>
                <tr className="admin-encabezado">
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Stock</th>
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
                                <td>{prod.stock}</td>
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
    )
}
