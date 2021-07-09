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
    margin: 0;
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
    /* overflow: scroll; */

    ${props => props.animate && css`
        animation: ${paperRevealAnimation} 700ms 0s 1 ease forwards;
    `}
`
export const CategoryLayout = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    box-sizing: border-box;
    padding: 40px;
    gap: 20px;
    background: linear-gradient(to bottom, white 0%, white 60%, transparent 100%);
`
export const Category = styled.a`
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props => props.selected ? 'black' : 'lightgray'};
`
export const ListLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: calc(1.5rem + 80px) 40px 40px 40px;
    gap: 20px;
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