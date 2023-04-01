import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${responsiveWidth.xxxl};
    @media (min-width: ${responsiveWidth.lg}) {
        gap: 1.5rem;
    }
`;

export const CommentContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.background.transparentBlack};
    margin: 1rem 0;
    padding: 0.5rem;
    @media (min-width: ${responsiveWidth.sm}) {
        padding: 1rem;
        margin: 1rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        padding: 1rem 2rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        padding: 1.5rem 3rem;
        // gap: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        padding: 1.5rem 5rem;
    }
`;