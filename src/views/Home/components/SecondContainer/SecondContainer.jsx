import { Container, MainContainer, Paragraph } from "./styles/styles";

export default function SecondContainer() {
    return(
        <MainContainer>
            <Container>
                <Paragraph>
                    Puedes reservar tu mesa para venir a comer con tu familia o amigos.<br/>
                    ¡Además puedes festejar tu cumpleaños y te regalamos una torta para que compartas con las personas que más quieres, 
                    solo debes reservar tu mesa en la sección "Reserva"!
                </Paragraph>
            </Container>
            <Container bgCol="blue">
                <Paragraph>
                    Contamos con un sistema de puntos que pueden traerte muchos beneficios.<br/>
                    ¡Solo debes registrarte y cada vez que vengas a nuestro local inicias sesión, pides tu comida, pagas y suma puntos!
                </Paragraph>
            </Container>
        </MainContainer>
    );
};