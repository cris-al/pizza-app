import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 1rem;
`;

export const Container = styled.section`
    display: flex;
    align-items: end;
    gap: 0.3rem;
    @media (min-width: ${responsiveWidth.md}) {
        gap: 1rem;
    }
`;

export const Container2 = styled.section`
    display: flex;
    justify-content: start;
    gap: 1rem;
    @media (min-width: ${responsiveWidth.md}) {
        gap: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        gap: 2rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 1rem;
    text-align: start;
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    margin-bottom: 0;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.2rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 1.3rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.6rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 1.7rem;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        font-size: 2rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.8rem;
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    margin-bottom: 0;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 0.9rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1rem;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        font-size: 1.2rem;
    }
`;

export const Icon = styled.img`
    width: 25px;
    filter: drop-shadow(2px 2px 2px ${Colors.shadow.dark});
    @media (min-width: ${responsiveWidth.lg}) {
        width: 30px;
    }
`;

export const Icon2 = styled.img`
    width: 25px;
    filter: drop-shadow(2px 2px 2px ${Colors.shadow.dark});
    @media (min-width: ${responsiveWidth.md}) {
        width: 30px;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        width: 35px;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        width: 40px;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        filter: drop-shadow(2px 2px 2px ${Colors.shadow.lightGrey});
    }
`;