import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Main = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    @media (min-width: ${responsiveWidth.xs}) {
        padding: 1rem;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
        padding: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        gap: 2rem;
        padding: 2rem 1.5rem;
    }
`;

export const Card = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: ${Colors.background.transparentBlack};
    border-radius: 5px;
    box-shadow: 5px 5px 10px ${Colors.shadow.dark};
    @media (min-width: ${responsiveWidth.sm}) {
        justify-content: space-between;
        align-items: center;
        width: 240px;
        height: 350px;
        padding: 1rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        width: 330px;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        width: 380px;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        width: 470px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100px;
    filter: drop-shadow(5px 5px 5px ${Colors.shadow.dark});
    object-fit: cover;
    @media (min-width: ${responsiveWidth.xs}) {
        height: 140px;
        width: 230px;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        height: 130px;
    }
    @media (min-width: ${responsiveWidth.md}) {
        height: 150px;
        width: 250px;
    }
`;

export const CardTitle = styled.h3`
    font-family: 'Edu NSW ACT Foundation', cursive;
    font-size: 1.1rem;
    font-weight: bold;
    color: ${Colors.word.darkGreen};
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.2rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 1.3rem;
    }
`;

export const CardParagraph = styled.p`
    font-size: ${({price}) => price ? "1.4rem" : "0.9rem" };
    font-family: 'Edu NSW ACT Foundation', cursive;
    margin-bottom: 0;
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: ${({price}) => price ? "1.6rem" : "1rem" };
    }
`;

export const Container = styled.section`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
    @media (min-width: ${responsiveWidth.md}) {
        width: 100%;
    }
`;

export const Button = styled.button`
    font-size: 0.8rem;
    font-family: 'Edu NSW ACT Foundation', cursive;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    background-color: ${Colors.button.background.darkGreen};
    box-shadow: 5px 5px 10px ${Colors.shadow.dark};
    &:hover {
        background-color: ${Colors.button.hover.lightGreen};
    }
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 0.9rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 1rem;
    }
`;