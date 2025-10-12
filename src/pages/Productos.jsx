import { useState } from "react";
import Selector from "../components/Selector";
import Cards from "../components/Cards";

export default function Productos(){
    
    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState("")

    return(
        <span>
            <Selector categorias={categorias} setCategorias={setCategorias} setCategoria={setCategoria}/>
            <Cards categoria={categoria}/>
        </span>
    )
}
