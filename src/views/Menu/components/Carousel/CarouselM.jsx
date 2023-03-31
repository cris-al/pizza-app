import Carousel from 'react-bootstrap/Carousel';
import { Image, Description, ItemTitle } from './styles/styles';
import Carousel1 from "assets/carousel1.jpg";
import Carousel2 from "assets/carousel2.png";
import Carousel3 from "assets/carousel3.png";
const items = [
    { src: Carousel1, title: "¡¡Tenemos una gran variedad de pizzas!!" ,
    description: "¿Eres vegano/a y/o celiaco/a? No te preocupes, hemos pensado en ustedes." },
    { src: Carousel2, title: "¡¡Disfruta de las mejores empanadas de la ciudad!!" ,
    description: "De carne, de pollo y de jamon y queso, elije la que más te guste." },
    { src: Carousel3, title: "¡¡No te olvides de pedir tu postre!!" ,
    description: "Elije de nuestra amplia carta de postres y disfruta. ¡¡No te quedes con las ganas!!" },
];

export default function CarouselM() {
  return (
    <Carousel fade className='shadow rounded'>
        { items.map(el => 
            <Carousel.Item key={el.title}>
                <Image
                    className="d-block w-100 rounded"
                    src={el.src}
                    alt={el.title} />
                <Carousel.Caption className='text-center'>
                    <ItemTitle>{el.title}</ItemTitle>
                    <Description>{el.description}</Description>
                </Carousel.Caption>
            </Carousel.Item>
            ) }
    </Carousel>
  );
};