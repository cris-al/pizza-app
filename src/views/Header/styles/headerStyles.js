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

export const Title = styled.h1`
    font-size: 1.1rem;
    margin: 0;
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
    font-weight: bold;
    font-size: 1rem;
    color: ${Colors.word.lightGrey};
    border-radius: 2px;
    border-bottom: 3px solid none;
    padding: 0.4rem 0.8rem;
    &:hover {
        color: ${Colors.word.black};
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
        background-color: #2e7d32;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        display: none;
    }
`;
