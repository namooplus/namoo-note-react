import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const BaseLayout = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    flex-flow: row nowrap;

    @media only screen and (max-width: 650px) {
        flex-flow: column nowrap;
    }
`

// 헤더
export const HeaderLayout = styled.div`
    display: flex;
    width: 250px;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 60px;
    background-color: #21D1C2;

    @media only screen and (max-width: 650px) {
        width: unset;
        height: 120px;
        justify-content: flex-end;
        gap: unset;
        padding: 20px 30px 20px 30px;
    }
`
export const LinkWrapper = styled(Link)`
    text-decoration: none;

    @media only screen and (max-width: 650px) {
        position: absolute;
        top: 20px;
        left: 30px;
    }
`
export const Title = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 2rem;
    color: black;
    opacity: 0.2;
    transition: opacity 500ms;

    &:hover {
        opacity: 0.5;
    }

    @media only screen and (max-width: 650px) {
        font-size: 1.6rem;
    }
`
export const CategoryLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 20px;

    @media only screen and (max-width: 650px) {
        flex-flow: row nowrap;
    }
`
export const Category = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    opacity: ${props => props.selected ? 1 : 0.4};
    transition: opacity 500ms;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 650px) {
        font-size: 1.4rem;
    }
`

// 내용
export const ContentLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    padding: 50px;
    box-sizing: border-box;
    gap: 15px;
    overflow-y: scroll;

    @media only screen and (max-width: 650px) {
        flex-flow: column nowrap;
        justify-content: flex-start;
        padding: 30px;
    }
`

// 애니메이션
const collapseAnimation = keyframes`
    0% {
        width: calc(50% - 250px);
    }
    100% {
        width: 0;
    }
`

// 오버레이
export const OverlayLayout = styled.div`
    position: absolute;
    left: 250px;
    height: 100%;
    background-color: #21D1C2;
    animation: ${collapseAnimation} 600ms 0s 1 ease forwards;
`