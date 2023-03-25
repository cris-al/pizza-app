import styled from "styled-components";
import { Offcanvas } from "react-bootstrap";
import { Colors } from "theme";
import { NavLink } from "react-router-dom";

export const OffcanvasStyled = styled(Offcanvas)`
    background-color: ${Colors.backgroundHeader.darkGreen};
`;

export const Div = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const LinkStyled = styled(NavLink)`
    text-decoration: none;
    font-size: 1rem;
    color: #bdbdbd;
    border-radius: 2px;
    padding: 0.4rem 0.8rem;
    &:hover {
        color: ${Colors.word.lightGrey};
        background-color: ${Colors.hover.lightGreen};
    }
    &.active {
        color: ${Colors.word.lightGrey};
        background-color: ${Colors.hover.lightGreen};
    }
`;