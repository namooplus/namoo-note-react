import styled, { keyframes } from "styled-components";

// 레이아웃
export const BaseLayout = styled.div`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
`
export const FrameLayout = styled.div`
    display: flex;
    width: 50%;
    flex-flow: column nowrap;
    justify-content: ${props => props.align || "flex-start"};
    align-items: ${props => props.align || "flex-start"};
    padding: 50px;
    box-sizing: border-box;
    gap: 15px;
    background-color: ${props => props.backgroundColor || "transprent"};
`

// 첫번째 프레임
export const Greeting = styled.h1`
    margin: 0;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 1rem;
    color: white;
`

// 두번째 프레임
export const Introduction = styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: end;
    color: black;
`
export const LinkLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
`

// 애니메이션
const pencilAnimation = keyframes`
    0% {
        top: 70%;
        transform: translate(-50%, -50%) rotate(0deg);
    }
    40% {
        top: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
    }
    60% {
        top: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        top: 50%;
        transform: translate(-50%, -50%) rotate(30deg);
    }
`

// 오버레이
export const Pencil = styled.img`
    position: absolute;
    left: 50%;
    height: 450px;
    aspect-ratio: 1/20;
    filter: drop-shadow(0 0 20px black);
    animation: ${pencilAnimation} 1500ms 0s 1 ease forwards;
`