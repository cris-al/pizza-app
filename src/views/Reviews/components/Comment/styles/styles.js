import styled from "styled-components";
import { Colors, responsiveWidth } from "theme";

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 0.5rem;
    gap: 0.8rem;
    overflow: hidden;
    @media (min-width: ${responsiveWidth.sm}) {
        padding: 1rem;
    }
    @media (min-width: ${responsiveWidth.lg}) {
        padding: 1rem 1.5rem;
    }
`;

export const Container1 = styled.section`
    display: flex;
    gap: 0.5rem;
    @media (min-width: ${responsiveWidth.md}) {
        gap: 1rem;
    }
`;

export const Container2 = styled.section`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 0.3rem;
`;

export const Container3 = styled.section`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const AvatarIcon = styled.img`
    width: 50px;
`;

export const UserName = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: ${Colors.word.darkGreen};
    margin-bottom: 0;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.2rem;
    }
`;

export const StarContainer = styled.section`
    display: flex;
`;

export const StarIcon = styled.img`
    width: 15px;
    filter: drop-shadow(0 0 1px ${Colors.shadow.lightGrey});
`;

export const CommentDate = styled.p`
    font-size: 0.7rem;
    margin-bottom: 0;
    @media (min-width: ${responsiveWidth.xxl}) {
        font-size: 0.8rem;
    }
`;

export const Paragraph = styled.p`
    display: ${({showText}) => showText ? "block" : "-webkit-box" };
    cursor: pointer;
    font-size: 1rem;
    text-align: start;
    margin-bottom: 0;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    @media (min-width: ${responsiveWidth.md}) {
        font-size: 1.1rem;
    }
    @media (min-width: ${responsiveWidth.xl}) {
        font-size: 1.2rem;
    }
`;