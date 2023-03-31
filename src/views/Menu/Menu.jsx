import Cards from "./components/Cards/Cards";
import CarouselM from "./components/Carousel/CarouselM";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";
import { Main, Container } from "./styles/menuStyles";

export default function Menu() {
    return(
        <Main>
            <CarouselM />
            <Container>
                <Filter name="type" options={["Pizza", "Empanadas", "Postres"]} placeholder="Seleccione una opción"/>
                <Search />
            </Container>
            <Cards />
        </Main>
    );
};