import { useState, useEffect } from "react"
import Swal from 'sweetalert2';
import CardProducto from "../components/CardProducto"
import {Spinner} from "react-bootstrap"

export default function Cards({categoria}){
    
    const [productos, setProductos] = useState([])

    const buscarProductos = (categoria) => {
        fetch(`https://dummyjson.com/products/category/${categoria}`)
        .then((res) => res.json())
        .then((prods) => {
            setProductos(prods.products)
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al cargar los productos"
            });
        })
    }

    useEffect(() => {
        setProductos([]);
        if(categoria){
            buscarProductos(categoria);
        }
    }, [categoria]);

    if(!productos){
        return(
            <Spinner animation="border" role="status"/>
        )
    }

    return(
        <div className="productos-container">
            {
                productos.map((p) => (
                    <CardProducto 
                        key={p.id}
                        id={p.id} 
                        nombre={p.title} 
                        descripcion={p.description}
                        foto={p.thumbnail}
                        precio={p.price}
                        estrellas={p.rating}
                    />
                ))
            }
        </div>
    )
}
