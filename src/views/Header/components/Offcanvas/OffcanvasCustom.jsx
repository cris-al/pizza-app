import { OffcanvasStyled, Div, LinkStyled } from "./styles/styles";
import { navItems } from "utilities";

export default function OffcanvasCustom({show, handleClick}) {
    return(
        <OffcanvasStyled show={show} onHide={handleClick}>
            <OffcanvasStyled.Header closeButton>
                <OffcanvasStyled.Title>Pizza Party</OffcanvasStyled.Title>
            </OffcanvasStyled.Header>
            <OffcanvasStyled.Body>
                <Div>
                { navItems.map(el =>
                    <LinkStyled to={el.to} activeclassname="active" end key={el.name}
                        onClick={handleClick}>
                        {el.name}
                    </LinkStyled>) }
                </Div>
            </OffcanvasStyled.Body>
        </OffcanvasStyled>
    );
};