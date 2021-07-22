import styled, { css, keyframes } from "styled-components";

export const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: row nowrap;

    @media only screen and (max-width: 1000px) {
        flex-flow: column nowrap;
    }
`

// 헤더
export const HeaderLayout = styled.div`
    display: flex;
    width: 30%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        padding-top: 40px;
    }
`
export const Title = styled.h1` 
    margin: 0;
    font-size: 2.3rem;
    font-weight: 900;
    letter-spacing: 0.8rem;

    @media only screen and (max-width: 1000px) {
        font-size: 2rem;
    }
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

    ${props => props.animate && css`
        animation: ${paperRevealAnimation} 700ms 0s 1 ease forwards;

        @media only screen and (max-width: 1000px) {
            display: none;
        }
    `}
`
export const CategoryLayout = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    box-sizing: border-box;
    padding: 40px 40px 0 40px;
    gap: 20px;
    white-space: nowrap;
    overflow-x: scroll;
`
export const Category = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 800;
    color: black;
    opacity: ${props => props.selected ? 1 : 0.2};
    transition: opacity 500ms;

    &:hover {
        opacity: 1;
    }
`
export const ListLayout = styled.div`
    position: relative;
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
`
export const ListOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(to bottom, white 0%, transparent 100%);
    pointer-events: none;
`
export const ListContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 0 0;
    padding: 40px;
    gap: 20px;
    box-sizing: border-box;
    overflow: scroll;
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