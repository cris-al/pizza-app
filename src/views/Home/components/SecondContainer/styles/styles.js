import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0.5rem;
    width: 100%;
    max-width: ${responsiveWidth.xxxl};
    @media (min-width: ${responsiveWidth.sm}) {
        flex-direction: row;
    }
    @media (min-width: ${responsiveWidth.md}) {
        padding: 0 1.5rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        gap: 2rem;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        gap: 3rem;
    }
`;

export const Container = styled.section`
    background-color: ${({bgCol}) => bgCol ? Colors.background.transparentBlue : "#1b5e1fd6"};
    padding: 1rem;
    box-shadow: 5px 5px 10px ${Colors.shadow.dark};
    border-radius: 5px;
    @media (min-width: ${responsiveWidth.xs}) {
        padding: 1rem 1.5rem;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        width: 50%;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        padding: 1.5rem 2rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.1rem;
    text-align: start;
    margin: 0;
    color: ${Colors.word.lightGrey};
    font-family: 'Edu NSW ACT Foundation', cursive;
    text-shadow: 2px 2px 2px ${Colors.shadow.black};
    
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 1.2rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 1.3rem;
    }
`;