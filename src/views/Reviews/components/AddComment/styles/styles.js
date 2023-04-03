import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
`;

export const Container1 = styled.section`
    display: flex;
    gap: 0.5rem;
    @media (min-width: ${responsiveWidth.md}) {
        gap: 1rem;
    }
`;

export const Container2 = styled.section`
    display: flex;
    justify-content: space-between;
    @media (min-width: ${responsiveWidth.xs}) {
        gap: 1rem;
        justify-content: end;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        gap: 1.5rem;
    }
`;

export const Container3 = styled.section`
    display: flex;
`;

export const AvatarIcon = styled.img`
    width: 50px;
`;

export const Input = styled.input`
    width: calc(100% - 50px);
    padding: 0.5rem 0.3rem;
    background-color: transparent;
    border-radius: 5px 5px 0 0;
    border: none;
    border-bottom: 1px solid ${Colors.background.darkGreen};
    outline: none;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
    }
`;

export const Button = styled.button`
    padding: 0.3rem 0.6rem;
    background-color: ${Colors.button.background.darkGreen};
    box-shadow: 2px 2px 5px ${Colors.shadow.dark};
    border: none;
    border-radius: 5px;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
    }
    &:hover {
        background-color: ${Colors.button.hover.lightGreen};
    }
`;

export const StarIcon = styled.img`
    width: 20px;
    filter: drop-shadow(0 0 1px ${Colors.shadow.lightGrey});
`;