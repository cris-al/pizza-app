import { Main, Container, Title } from "./styles/contactStyles";
import Formulary from "./components/Form/Formulary";
import Data from "./components/Data/Data";

export default function Contact() {
    return(
        <Main>
            <Data />
            <Container>
                <Title>Formulario de contacto</Title>
                <Formulary />
            </Container>
        </Main>
    );
};