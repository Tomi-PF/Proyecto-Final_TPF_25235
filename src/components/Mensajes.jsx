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

export const confirmarEleccion = async (mensaje, accion) => {
    return Swal.fire({
        title: mensaje,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: accion,
    }).then((result) => {
        return result.isConfirmed
    });
}
