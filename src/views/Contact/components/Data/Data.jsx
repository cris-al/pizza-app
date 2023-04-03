import { MainContainer, Paragraph, Icon, Container, Container2,
SubTitle, Icon2 } from "./styles/styles";
import GPS from "assets/gps-icon.svg";
import Phone from "assets/phone-icon.svg";
import Wp from "assets/whatsapp-icon.svg";
import Fb from "assets/facebookIcon2.svg";
import Tw from "assets/icon-twitter.svg";
import Ig from "assets/instagramIcon3.svg";
import Email from "assets/email-icon.svg";

export default function Data() {
    return(
        <MainContainer>
            <SubTitle>Puedes comunicarte con nosotros a través de: </SubTitle>
            <Container>
                <Icon src={Email} alt="icono de email" />
                <Paragraph>pizzaparty-example@email.com</Paragraph>
            </Container>
            <Container>
                <Icon src={Wp} alt="icono de whatsapp" />
                <Paragraph>+54 9 123456789</Paragraph>
            </Container>
            <Container>
                <Icon src={Phone} alt="icono de telefono" />
                <Paragraph>1234567</Paragraph>
            </Container>
            <Container>
                <Icon src={GPS} alt="icono de ubicación" />
                <Paragraph>San Miguel de Tucumán, Tucumán, Argentina</Paragraph>
            </Container>
            <SubTitle>Siguenos en nuestras redes:</SubTitle>
            <Container2>
                <Icon2 title="Instagram" src={Ig} alt="icono de instagram"/>
                <Icon2 title="Facebook" src={Fb} alt="icono de facebook"/>
                <Icon2 title="Twitter" src={Tw} alt="icono de twitter"/>
            </Container2>
        </MainContainer>
    );
};