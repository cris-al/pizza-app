import FirstContainer from "./components/FirstContainer/FirstContainer";
import SecondContainer from "./components/SecondContainer/SecondContainer";
import { Main, Subtitle, ButtonContainer, Button } from "./styles/homeStyles";
// import CardPizza from "./components/CardPizza/CardPizza";
// import CardCarousel from "./components/Carousel/CardCarousel";
// import Loading from "components/Loading/Loading";

export default function Home() {
    return(
        <Main>
            <FirstContainer />
            <Subtitle>En Pizza Party ofrecemos los mejores servicios:</Subtitle>
            <SecondContainer />
            <ButtonContainer>
                <Button bg="green">Iniciar Sesión</Button>
                <Button bg="blue">Registrarme</Button>
            </ButtonContainer>
            <Subtitle>Ven a disfrutar de nuestra deliciosa comida:</Subtitle>
        </Main>
    );
};