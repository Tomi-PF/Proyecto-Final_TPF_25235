import { createContext, useState } from "react";
import { confirmarEleccion } from "./Mensajes";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find(item => item.id === producto.id)
            if(existe){
                return prevCarrito.map(item => 
                    item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item
                )
            }
            return [...prevCarrito, {...producto, cantidad: 1}]
        })
    }

    const eliminarCarrito = (id) => {
        confirmarEleccion("¿Desea eliminar estos productos del carrito?", "Eliminar").then((confirmado) => {
            if(confirmado){
                setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id))    
            }
        })
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return(
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                agregarCarrito,
                eliminarCarrito,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
