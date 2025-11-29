import { useState, useEffect } from "react";
import { mostrarAlertaError } from "./Mensajes";

export default function Carrousel(){
    
    const [productos, setProductos] = useState([])
    const [indiceActual, setIndiceActual] = useState(0);
    const cantidadImagenes = productos.length;

    useEffect(() => {
        fetch('https://692b58067615a15ff24f58f8.mockapi.io/api/v1/productos/')
        .then((res) => res.json())
        .then((productos) => {
            setProductos(productos)
        })
        .catch(() => {
            mostrarAlertaError("Error al cargar las fotos de los productos")
        })
    },[])

    const cambiarImagen = (direccion) => {

        let indiceNuevo = indiceActual + direccion

        if(indiceNuevo < 0){
            indiceNuevo = cantidadImagenes - 1
        }else if(indiceNuevo >= cantidadImagenes){
            indiceNuevo = 0
        }

        setIndiceActual(indiceNuevo)
    }

    useEffect(() => {

        const intervalo = setInterval(() => {
            cambiarImagen(1)
        }, 2000)

        return () => clearInterval(intervalo)
    },[indiceActual])

    if(productos.length != 0){
        return(
            <div className="carousel">
                <div className="carousel-images" style={{ transform: `translateX(${-indiceActual * 100}%)`}}>
                    {
                        productos.map((prod) => (
                            <img key={prod.id} src={prod.imagen} alt={prod.title}/>
                        ))
                    }
                </div>
                <button className="prev" onClick={() => cambiarImagen(-1)}>&#10094;</button>
                <button className="next" onClick={() => cambiarImagen(1)}>&#10095;</button>
            </div>
        )
    }
}
