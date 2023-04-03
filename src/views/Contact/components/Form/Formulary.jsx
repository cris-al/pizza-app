import { Form, Input, TextArea, Button } from "./styles/styles";

export default function Formulary() {
    return(
        <Form>
            <Input placeholder="Escribe tu nombre..."/>
            <Input placeholder="Escribe tu email..."/>
            <TextArea placeholder="Escribe tu mensaje..."/>
            <Button>Enviar</Button>
        </Form>
    );
};