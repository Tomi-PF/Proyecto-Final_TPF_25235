import { useEffect } from "react";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';

export default function Selector({setCategoria, categorias, setCategorias}){

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then((res) => res.json())
        .then((cat) => {
            setCategorias(cat)
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al cargar las categorias de los productos"
            });
        })
    },[])

    const cambiarOpcion = (e) => {
        setCategoria(e.target.value)
    }

    return(
        <Form.Select 
            aria-label="Default select example" 
            style={{marginTop: "40px", marginBottom: "20px"}} 
            onChange={cambiarOpcion}
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
