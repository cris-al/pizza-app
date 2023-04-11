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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam unde perferendis, quos fuga, 
                voluptatibus dolor, velit doloremque modi suscipit vero accusamus. Sint corrupti quibusdam vero modi eius, 
                aperiam, quam iusto consequuntur repudiandae saepe error in quae? 
                Error quia amet impedit similique explicabo nemo sint voluptates minima accusantium totam officia rerum velit, 
                saepe officiis ipsa repudiandae culpa veritatis? Et aperiam ex deserunt sint odit molestias voluptates id, 
                quam tempore architecto est. Obcaecati quibusdam explicabo consequatur inventore placeat? 
                Hic, rerum exercitationem dolor aliquid maxime sunt in maiores doloremque laboriosam nemo recusandae, 
                distinctio deserunt nesciunt incidunt quaerat unde tempora eveniet. Voluptatem, aspernatur eum.
            </Paragraph>
        </MainContainer>
    );
};