import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: ${Colors.backgroundHeader.darkGreen};
`;

export const Div = styled.section`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Title = styled.h1`
    display: none;
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0;
    @media (min-width: ${responsiveWidth.sm}) {
        display: flex;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 1.2rem;
    }
`;

export const NavStyled = styled.nav`
    display: none;
    @media (min-width: ${responsiveWidth.sm}) {
        display: flex;
        gap: 0.5rem;
    }
`;

export const LinkStyled = styled(NavLink)`
    text-decoration: none;
    font-size: 1rem;
    color: ${Colors.word.lightGrey};
    border-radius: 2px;
    border-bottom: 3px solid none;
    padding: 0.4rem 0.8rem;
    &:hover {
        color: ${Colors.word.black};
        background-color: ${Colors.hover.lightGreen};
    }
    &.active {
        border-bottom: 3px solid ${Colors.word.black};
        color: ${Colors.word.black};
    }
`;

export const Icon = styled.img`
    height: 40px;
    @media (min-width: ${responsiveWidth.lg}) {
        height: 45px;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background: transparent;
    &:hover {
        background-color: ${Colors.button.hover.lightGreen};
    }
    @media (min-width: ${responsiveWidth.sm}) {
        display: none;
    }
`;
