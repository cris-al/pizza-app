import styled from "styled-components";
import { responsiveWidth } from "theme";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: ${responsiveWidth.xxxl};
    @media (min-width: ${responsiveWidth.lg}) {
        gap: 1.5rem;
    }
`;

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem 0.5rem 0 0.5rem;
    @media (min-width: ${responsiveWidth.xs}) {
        padding: 0.5rem 1rem 0 1rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        justify-content: end;
    }
`;