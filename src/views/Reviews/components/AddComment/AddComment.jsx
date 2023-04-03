import Avatar from "assets/avatar-default-icon.svg";
import { MainContainer, AvatarIcon, Input, Button, Container1,
    Container2, Container3, StarIcon } from "./styles/styles";
import Star1 from "assets/star-icon-1.svg";
import Star2 from "assets/star-icon-2.svg";

export default function AddComment() {

    return(
        <MainContainer>
            <Container1>
                <AvatarIcon src={Avatar} alt="avatar de usuario"/>
                <Input placeholder="Deja tu comentario..."/>
            </Container1>
            <Container2>
                <Container3>
                    <StarIcon src={ Star2 } alt="icono de estrella"/>
                    <StarIcon src={ Star2 } alt="icono de estrella"/>
                    <StarIcon src={ Star2 } alt="icono de estrella"/>
                    <StarIcon src={ Star2 } alt="icono de estrella"/>
                    <StarIcon src={ Star2 } alt="icono de estrella"/>
                </Container3>
                <Button>Comentar</Button>
            </Container2>
        </MainContainer>
    );
};