import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Select = styled.select`
    outline: none;
    width: 40%;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    background-color: ${Colors.background.transparentBlack};
    box-shadow: 5px 5px 10px ${Colors.shadow.dark};
    &:hover {
        cursor: pointer;
        border: 1px solid ${Colors.hover.lightGreen};
    }
    @media (min-width: ${responsiveWidth.sm}) {
        width: 50%;
    }
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
        width: 300px;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        font-size: 1.2rem;
    }
`;