import { MainContainer, Container1, Container2, Div,
Title, Image, Icon, Paragraph, Range1, Range2, ContainerRange } from "./styles/styles";
import Star from "assets/star-icon-2.svg";
import Users from "assets/users-icon.svg";

export default function Rating() {
    return(
        <MainContainer>
            <Container1>
                <Div>
                    <Title>4.5</Title>
                    <Image src={Star} alt="icono de estrella dorada"/>
                </Div>
                <Div>
                    <Icon src={Users} alt="icono de usuarios"/>
                    <Paragraph>50123</Paragraph>
                </Div>
            </Container1>
            <Container2>
                <ContainerRange>
                    <Paragraph>5</Paragraph>
                    <Range1><Range2 range="90%"/></Range1>
                </ContainerRange>
                <ContainerRange>
                    <Paragraph>4</Paragraph>
                    <Range1><Range2 range="70%"/></Range1>
                </ContainerRange>
                <ContainerRange>
                    <Paragraph>3</Paragraph>
                    <Range1><Range2 range="20%"/></Range1>
                </ContainerRange>
                <ContainerRange>
                    <Paragraph>2</Paragraph>
                    <Range1><Range2 range="15%"/></Range1>
                </ContainerRange>
                <ContainerRange>
                    <Paragraph>1</Paragraph>
                    <Range1><Range2 range="3%"/></Range1>
                </ContainerRange>
            </Container2>
        </MainContainer>
    );
};