import Swal from "sweetalert2";

export const mostrarAlertaExito = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: "success",
        draggable: true
    })
}

export const mostrarAlertaError = (mensaje) => {
    Swal.fire({
        text: mensaje,
        icon: "error",
        title: "Oops..."
    })
}
