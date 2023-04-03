import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    margin: 1rem 0;
    gap: 1rem;
    width: 100%;
    @media (min-width: ${responsiveWidth.sm}) {
        margin: 1rem 0;
    }
    @media (min-width: ${responsiveWidth.md}) {
        flex-direction: row;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        margin: 2rem 0;
        gap: 2rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        gap: 3rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        gap: 4rem;
    }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    @media (min-width: ${responsiveWidth.md}) {
        gap: 1rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        gap: 1.5rem;
    }
`;

export const Title = styled.h1`
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    @media (min-width: ${responsiveWidth.sm}) {
        font-size: 2.2rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        font-size: 2.6rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 3rem;
    }
`;