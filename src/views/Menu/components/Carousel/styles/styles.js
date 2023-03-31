import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Image = styled.img`
    height: 180px;
    object-fit: cover;
    @media (min-width: ${responsiveWidth.xs}) {
        height: 220px;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        height: 280px;
    }
    @media (min-width: ${responsiveWidth.md}) {
        height: 360px;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        height: 440px;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        height: 500px;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        height: 580px;
    }
`;

export const ItemTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 0;
    color: ${Colors.word.white};
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    font-family: 'Edu NSW ACT Foundation', cursive;
    @media (min-width: ${responsiveWidth.xs}) {
        font-size: 1.1rem;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        font-size: 1.4rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 1.6rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.7rem;
        margin-bottom: 1.3rem;
    }
`;

export const Description = styled.p`
    display: none;
    width: 100%;
    margin-bottom: 0;
    color: ${Colors.word.white};
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    font-family: 'Edu NSW ACT Foundation', cursive;
    @media (min-width: ${responsiveWidth.sm}) {
        display: flex;
        font-size: 1.1rem;
        justify-content: center;
    }
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 1.3rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
`;