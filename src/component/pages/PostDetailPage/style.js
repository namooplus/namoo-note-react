import styled from "styled-components";

export const BaseLayout = styled.div.attrs(props => ({
    style: {
        backgroundColor: `rgba(255, 255, 255, ${props.whiteDegree})`
    }
}))`
    display: flex;
    flex-flow: column nowrap;
`

// 배경
export const BackgroundLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-flow: column nowrap;
    pointer-events: none;
`
export const GuideLabel = styled.span`
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: 30px;
    font-size: 2.5rem;
    text-align: center;
    color: black;
`
export const Decoration = styled.span`
    position: absolute;
    top: ${props => props.top || 'unset'};
    bottom: ${props => props.bottom || 'unset'};
    left: ${props => props.left || 'unset'};
    right: ${props => props.right || 'unset'};
    color: gray;
    font-size: 20rem;
    font-weight: 800;
    opacity: 0.2;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

// 헤더
export const HeaderLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 50px;
    box-sizing: border-box;
    gap: 5px;
    pointer-events: none;
`
export const Title = styled.h1`
    margin: 0;
    color: black;
    font-size: 2.5rem;
`
export const Description = styled.h2`
    margin: 0;
    color: gray;
    font-size: 1.3rem;
    font-weight: 300;
`
export const TagLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 7px;
    margin-top: 15px;
`
export const Tag = styled.span`
    padding: 5px 7px;
    background: skyblue;
    color: black;
    font-size: 0.7rem;
`

// 포스트
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    align-items: center;
    padding: 50px;
    box-sizing: border-box;
    margin-top: 100vh;
`
export const Post = styled.div`
    width: 700px;
    margin: 0;
`

// 플로팅
export const MenuLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    top: ${props => props.top || "unset"};
    bottom: ${props => props.bottom || "unset"};
    right: ${props => props.right || "unset"};
    left: ${props => props.left || "unset"};
    display: flex;
    flex-flow: row nowrap;
    margin: 40px;
    gap: 20px;
`