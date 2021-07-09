import styled, { css, keyframes } from "styled-components";

export const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: row nowrap;
`

// 헤더
export const HeaderLayout = styled.div`
    display: flex;
    width: 30%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 2.3rem;
    font-weight: 900;
    letter-spacing: 0.8rem;
`

// 내용
export const ContentLayout = styled.div`
    position: relative;
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`
export const PaperLayout = styled.div`
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    height: 90%;
    width: 90%;
    box-sizing: border-box;
    padding: ${props => props.padding};
    background-color: white;
    box-shadow: 0 0 10px lightgray;
    overflow: scroll;

    ${props => props.animate && css`
        animation: ${paperRevealAnimation} 700ms 0s 1 ease forwards;
    `}
`
export const Subtitle = styled.span`
    align-self: flex-start;
    margin: 0;
    background-color: black;
    font-size: 1rem;
    font-weight: 500;
    color: white;
`
export const ListLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 30px 0 40px 0;
    gap: 20px;
`

// 애니메이션
const paperRevealAnimation = keyframes`
    0% {
        transform: translate(0) rotate(0);
    }
    100% {
        transform: translate(-50px) rotate(-3deg);
    }
`