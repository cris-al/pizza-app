import FirstContainer from "./components/FirstContainer/FirstContainer";
import SecondContainer from "./components/SecondContainer/SecondContainer";
import { Main, Subtitle } from "./styles/homeStyles";
import CardPizza from "./components/CardPizza/CardPizza";

export default function Home() {
    return(
        <Main>
            <FirstContainer />
            <Subtitle>En Pizza Party ofrecemos los mejores servicios:</Subtitle>
            <SecondContainer />
            <Subtitle>Ven a disfrutar de nuestra deliciosa comida:</Subtitle>
            { [1,2,3,4].map(el => <CardPizza key={el}/>) }
        </Main>
    );
};