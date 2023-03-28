import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: ${responsiveWidth.md}) {
        gap: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        gap: 2rem;
    }
`;

export const Container = styled.section`
    background-color: ${Colors.background.transparentRed};
    padding: 1rem 0.5rem;
    width: 100%;
    max-width: ${responsiveWidth.xxxl};
    box-shadow: 5px 5px 10px ${Colors.shadow.dark};
    @media (min-width: ${responsiveWidth.xs}) {
        padding: 1rem;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        display: flex;
        gap: 1rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        padding: 1.5rem 2rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        padding: 2rem 2.3rem;
        gap: 2rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        gap: 2.5rem;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        padding: 2rem 3.5rem;
        gap: 3.5rem;
        border-radius: 0 0 5px 5px;
    }
`;

export const TextContainer = styled.section`
    @media (min-width: ${responsiveWidth.sm}) {
        display: flex;
        text-align: start;
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    text-align: center;
    color: ${Colors.word.lightGrey};
    text-shadow: 2px 2px 2px ${Colors.shadow.black};
    @media (min-width: ${responsiveWidth.sm}) {
        font-size: 2.1rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 2.8rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 3.5rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 4rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 4.8rem;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        font-size: 5.8rem;
    }
`;

export const Subtitle = styled.h2`
    width: 100%;
    padding: 0 0.5rem;
    font-size: 1.3rem;
    text-align: start;
    color: ${Colors.word.lightGrey};
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    font-family: 'Edu NSW ACT Foundation', cursive;
    @media (min-width: ${responsiveWidth.sm}) {
        font-size: 1.4rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.5rem;
        padding: 0 1.5rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 1.6rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.7rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 1.8rem;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        font-size: 1.9rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1.1rem;
    color: ${({col}) => col ? col : Colors.word.lightGrey};
    text-align: ${({txtAl}) => txtAl};
    font-family: 'Edu NSW ACT Foundation', cursive;
    text-shadow: 2px 2px 2px ${Colors.shadow.black};
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.2rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 1.4rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 1.6rem;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        font-size: 1.7rem;
    }
`;

export const Image = styled.img`
    display: none;
    height: 200px;
    filter: drop-shadow(10px 20px 10px ${Colors.shadow.black});
    @media (min-width: ${responsiveWidth.sm}) {
        display: flex;
    }
    @media (min-width: ${responsiveWidth.md}) {
        height: 250px;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        height: 300px;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        height: 350px;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        height: 400px;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        height: 450px;
    }
`;