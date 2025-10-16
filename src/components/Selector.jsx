import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { mostrarAlertaError } from "./Mensajes";

export default function Selector({setCategoria, categorias, setCategorias}){

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then((res) => res.json())
        .then((cat) => {
            setCategorias(cat)
        })
        .catch(() => {
            mostrarAlertaError("Error al cargar las categorias de los productos")
        })
    },[])

    return(
        <Form.Select 
            aria-label="Default select example" 
            style={{marginTop: "40px", marginBottom: "20px"}} 
            onChange={(e) => setCategoria(e.target.value)}
        >
            <option disabled>Open this select menu</option>
            {
                categorias.map((c, indice) => (
                    <option key={indice} value={c}>{c}</option>
                ))
            }
        </Form.Select>
    )
}
