import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const MainContainer = styled.section`
    display: flex;
    padding: 0.5rem;
    @media (min-width: ${responsiveWidth.sm}) {
        padding: 1rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        width: 700px;
    }
`;

export const Container1 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    gap: 0.3rem;
`;
export const Container2 = styled.section`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 0 0.5rem;
`;

export const Div = styled.section`
    display: flex;
    gap: 0.5rem;
`;

export const Title = styled.p`
    font-size: 2rem;
    margin-bottom: 0;
    text-shadow: 4px 4px 4px ${Colors.shadow.dark};
    @media (min-width: ${responsiveWidth.xs}) {
        font-size: 2.3rem;
    }
    @media (min-width: ${responsiveWidth.sm}) {
        font-size: 3rem;
    }
`;

export const Image = styled.img`
    width: 40px;
    filter: drop-shadow(5px 5px 5px ${Colors.shadow.dark});
    @media (min-width: ${responsiveWidth.sm}) {
        width: 55px;
    }
`;

export const Icon = styled.img`
    width: 15px;
    @media (min-width: ${responsiveWidth.md}) {
        width: 20px;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.8rem;
    margin-bottom: 0;
    text-shadow: 2px 2px 2px ${Colors.shadow.dark};
    @media (min-width: ${responsiveWidth.xs}) {
        font-size: 0.9rem;
    }
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1rem;
    }
`;

export const ContainerRange = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
`;

export const Range1 = styled.section`
    height: 10px;
    width: 90%;
    background-color: ${Colors.background.transparentBlack};
    border: 1px solid ${Colors.background.darkGreen};
    border-radius: 10px;
    box-shadow: 5px 5px 5px ${Colors.shadow.dark};
    overflow: hidden;
`;

export const Range2 = styled.section`
    height: 100%;
    width: ${({range}) => range ? range : "1px"};
    background-color: ${Colors.background.darkGreen};
`;