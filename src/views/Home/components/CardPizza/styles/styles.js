import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Main = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 5px;
    padding: 1rem;
    background-color: ${Colors.background.transparentRed};
    margin: 0 0.5rem;
`;

export const Image = styled.img`
    height: 70px;
    width: 100%;
    object-fit: cover;
    @media (min-width: ${responsiveWidth.xs}) {
        height: 95px;
    }
`;

export const TextContainer = styled.section`

`;

export const Name = styled.h3`
    font-size: 1.1rem;
    text-align: start;
    color: ${Colors.word.lightGrey};
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    margin-bottom: 0;
`;

export const Description = styled.p`
    font-size: 1rem;
    text-align: start;
    color: ${Colors.word.lightGrey};
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    font-family: 'Edu NSW ACT Foundation', cursive;
    margin-bottom: 0;
`;