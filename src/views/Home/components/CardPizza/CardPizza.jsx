import { Main, Image, Description, Name } from "./styles/styles";
import Pizza from "assets/pizza1.png";

export default function CardPizza() {
    return(
        <Main>
            <Image src={Pizza} alt="Imagens de la pizza con champignone"/>
            <section>
                <Name>Champignone</Name>
                <Description>
                    Ingredientes: salsa de tomate, queso muzzarella, salame.
                </Description>
            </section>
        </Main>
    );
};