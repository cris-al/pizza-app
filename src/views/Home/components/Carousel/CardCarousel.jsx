import { Carousel } from "react-bootstrap";
import { Card, Image } from "./styles/styles";
import Pizza from "assets/pizza1.png";

export default function CardCarousel() {
    return(
        <Carousel className="d-block w-100" indicators={false}>
            <Carousel.Item>
                <Card>
                    <Image src={Pizza} alt="Imagen de pizza"/>
                    <h3>Pizza Muzza</h3>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card>
                    <Image src={Pizza} alt="Imagen de pizza"/>
                    <h3>Pizza Ternera</h3>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card>
                    <Image src={Pizza} alt="Imagen de pizza"/>
                    <h3>Pizza Salchicha</h3>   
                </Card>
            </Carousel.Item>
        </Carousel>
    );
};