import { Main, Card, CardTitle, CardParagraph, Image,
Button, Container } from "./styles/styles";
import Pizza from "assets/pizza1.png";

const Menu = [
    { price: "150", src: Pizza, title: "Pizza champignone", ingredients: "Salsa de tomate, champignone, queso muzzarella, aceitunas negras"},
    { price: "150", src: Pizza, title: "Muzzarella", ingredients: "Salsa de tomate, queso muzzarella, aceitunas verdes, jamón"},
    { price: "150", src: Pizza, title: "Napolitana", ingredients: "Salsa de tomate, queso parmesano, jamón cocido, tomate en rodajas, hojas de albahaca"},
    { price: "150", src: Pizza, title: "Cuatro quesos", ingredients: "Salsa de tomate, queso muzzarella, queso parmesano, quezo azul, queso chedar, aceitunas"},
    { price: "150", src: Pizza, title: "Pizza pepperoni", ingredients: "Salsa de tomate, queso parmesano, pepperoni"},
    { price: "150", src: Pizza, title: "Pizza ternera", ingredients: "Salsa de tomate, queso muzzarella, carne de ternera, aceitunas verdes, hojas de albahaca"},
    { price: "150", src: Pizza, title: "Pizza fugazeta", ingredients: "Salsa de tomate, queso muzzarella, cebolla caramelizada"},
];

export default function Cards() {
    return(
        <Main>
            { 
                Menu.map(el => 
                    <Card key={el.ingredients}>
                        <Image src={el.src} alt={el.title}/>
                        <section>
                            <CardTitle>{el.title}</CardTitle>
                            <CardParagraph>{el.ingredients}</CardParagraph>
                        </section>
                        <Container>
                            <CardParagraph price={true}>$ {el.price}</CardParagraph>
                            <Button>Agregar</Button>
                        </Container>
                    </Card>
                )
            }
        </Main>
    );
};