import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.background.transparentBlack};
    box-shadow: 5px 5px 10px ${Colors.shadow.dark};
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    gap: 1rem;
    @media (min-width: ${responsiveWidth.xs}) {
        width: 350px;
        padding: 1rem;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        width: 400px;
        padding: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        width: 450px;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        padding: 2rem;
        width: 500px;
        gap: 1.5rem;
    }
    @media (min-width: ${responsiveWidth.xxl}) {
        padding: 2.5rem;
        width: 550px;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        width: 630px;
        padding: 2.5rem 3rem;
        gap: 1.8rem;
    }
`;

export const Input = styled.input`
    padding: 0.5rem 1rem;
    background-color: transparent;
    border-radius: 5px 5px 0 0;
    border: none;
    border-bottom: 1px solid ${Colors.background.darkGreen};
    outline: none;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
    }
`;

export const TextArea = styled.textarea`
    height: 100px;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border-radius: 5px 5px 0 0;
    border: none;
    border-bottom: 1px solid ${Colors.background.darkGreen};
    outline: none;
    resize: none;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
        height: 150px;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        height: 180px;
    }
    @media (min-width: ${responsiveWidth.xxxl}) {
        height: 200px;
    }
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: ${Colors.button.background.darkGreen};
    border: none;
    border-radius: 5px;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
    }
    &:hover {
        background-color: ${Colors.button.hover.lightGreen};
    }
`;