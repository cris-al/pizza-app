import Pizza from "assets/pizza-icon.svg";
import { Container, Image, TextContainer, Title, Paragraph,
Button } from "views/Home/styles/homeStyles";

export default function FirstContainer() {
    return(
        <Container>
            <Image src={Pizza} alt="Imagen del logo de la empresa"/>
            <TextContainer>
                <Title>Pizza Party</Title>
                <Paragraph>
                    ¡Bienvenidos! En nuestra pizzería, te ofrecemos mucho más que solo pizza.
                    Desde nuestras deliciosas empanadas recién horneadas hasta nuestros postres caseros y refrescantes bebidas, 
                    tenemos algo para todos los gustos. Nuestra pizza es hecha con amor y con los ingredientes más frescos, 
                    nuestra masa es hecha a mano todos los días y nuestras empanadas son auténticas y llenas de sabor.
                    Estamos seguros de que te encantará cada bocado que pruebes.<br />
                    ¡Gracias por visitarnos!
                </Paragraph>
                <Button>¡Quiero hacer mi pedido!</Button>
            </TextContainer>
        </Container>
    );
};