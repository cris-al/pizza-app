import { navItems } from "utilities";
import { HeaderContainer, LinkStyled, NavStyled, Title, Icon, Button,
 Div, Div1} from "./styles/headerStyles";
import PizzaIcon from "assets/pizza-icon.svg";
import MenuIcon from "assets/menu.svg";
import { useHandlerHeader } from "./hook/useHandlerHeader";
import OffcanvasCustom from "./components/Offcanvas/OffcanvasCustom";

export default function Header() {
    const { show, handleClick } = useHandlerHeader();
    return(
        <Div1>
                <HeaderContainer>
            <Div>
                <Icon src={PizzaIcon} alt="Icono de la marca"/>
                <Title>Pizza Party</Title>
            </Div>
            <Button onClick={handleClick}>
                <Icon src={MenuIcon} alt="Icono de menu"/>
            </Button>
            <OffcanvasCustom show={show} handleClick={handleClick}/>
            <NavStyled>
                { navItems.map(el =>
                    <LinkStyled to={el.to} activeclassname="active" end key={el.name}>
                        {el.name}
                    </LinkStyled>) }
            </NavStyled>
        </HeaderContainer>
            </Div1>
    );
};