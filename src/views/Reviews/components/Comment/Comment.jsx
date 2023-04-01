import { MainContainer, Container1, AvatarIcon, StarIcon, UserName, Paragraph,
Container2, Container3, CommentDate, StarContainer } from "./styles/styles";
import Avatar from "assets/avatar-default-icon.svg";
import Star1 from "assets/star-icon-1.svg";
import Star2 from "assets/star-icon-2.svg";
import { useState } from "react";

export default function Comment({ qualification }) {
    const [showText, setShowText] = useState(false);

    return(
        <MainContainer>
            <Container1>
                <AvatarIcon src={Avatar} alt="Avatar usuario" />
                <Container2>
                    <UserName>Nombre usuario</UserName>
                    <Container3>
                        <StarContainer>
                        { [1,2,3,4,5].map(el =>
                            qualification+1 <= el ? <StarIcon key={el} src={Star1} alt="icono estrella"/>
                                                : <StarIcon key={el} src={Star2} alt="icono estrella"/>) }
                        </StarContainer>
                        <CommentDate>DD/MM/YY</CommentDate>
                    </Container3>
                </Container2>
            </Container1>
            <Paragraph showText={showText} onClick={() => setShowText(!showText)}>
                hola estae asad jaslodi ajowkdalsih doawhdo askdjidwasd ajowkdalsih
                sdawodalsjdlka wda slda wldjlaskjoiwaj lkasjd ooaiwuda sdajldkwjaoisdafn
                sdawodalsjdlka wda slda wldjlaskjoiwaj lkasjd ooaiwuda sdajldkwjaoisdafn
                sdawodalsjdlka wda slda wldjlaskjoiwaj lkasjd ooaiwuda sdajldkwjaoisdafn
                sdawodalsjdlka wda slda wldjlaskjoiwaj lkasjd ooaiwuda sdajldkwjaoisdafn
                sdawodalsjdlka wda slda wldjlaskjoiwaj lkasjd ooaiwuda sdajldkwjaoisdafn
                sdawodalsjdlka wda slda wldjlaskjoiwaj lkasjd ooaiwuda sdajldkwjaoisdafn
                sdawodalsjdlka wda slda wldjlaskjoiwaj lkasjd ooaiwuda sdajldkwjaoisdafn
            </Paragraph>
        </MainContainer>
    );
};