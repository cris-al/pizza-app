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
    padding: 1rem 0.5rem;
    backdrop-filter: blur(5px);
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

export const ButtonContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0.5rem;
    gap: 0.5rem;
    @media (min-width: ${responsiveWidth.xs}) {
        justify-content: center;
        flex-direction: row;
        gap: 1rem;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        padding: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        margin: 0 2rem;
        background-color: ${Colors.background.transparentBlack};
        border-radius: 5px;
        box-shadow: 5px 5px 10px ${Colors.shadow.dark};
        width: 90%;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        padding: 2.5rem;
        gap: 2rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        padding: 3rem;
        gap: 3rem;
    }
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background: transparent;
    background-color: ${({bg}) => bg ? Colors.button.background[bg]
                                     : Colors.button.background.red};
    box-shadow: 5px 5px 10px ${Colors.shadow.dark};
    @media (min-width: ${responsiveWidth.md}) {
        width: 220px;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.1rem;
    }
    &:hover {
        background-color: ${({bg}) => bg ? Colors.button.hover[bg]
                                     : Colors.button.hover.red};
    }
`;