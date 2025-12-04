import { Form } from "react-bootstrap"

export default function CampoIngreso({texto, tipo, valor, mensaje, funcion}){

    return(
        <Form.Group className="mb-2">
            <Form.Label>{texto}</Form.Label>
            <Form.Control 
                type={tipo}
                value={valor}
                placeholder={mensaje}
                onChange={funcion}
                required
            />
        </Form.Group>
    )
}
