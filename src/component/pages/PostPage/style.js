import styled from "styled-components";

export const BaseLayout = styled.div.attrs(props => ({
    style: {
        backgroundColor: `rgba(255, 255, 255, ${props.whiteDegree})`
    }
}))`
    display: flex;
    flex-flow: column nowrap;
`

// 헤더
export const HeaderLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 5px;
    padding: 50px 50px 100px 50px;
    margin-top: calc(100vh - (3.3rem + 155px));
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

// 포스트
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 50px;
`
export const Post = styled.p`
    width: 600px;
    margin: 0;
`

// 오버레이
export const OverlayLayout = styled.div.attrs(props => ({
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
export const Decoration1 = styled.span`
    position: absolute;
    top: -10rem;
    left: 10rem;
    color: gray;
    font-size: 20rem;
    font-weight: 800;
    opacity: 0.2;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`
export const Decoration2 = styled.span`
    position: absolute;
    bottom: -8rem;
    right: 10rem;
    color: gray;
    font-size: 20rem;
    font-weight: 800;
    opacity: 0.2;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

// 플로팅
export const FloatingLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    margin: 40px;
    gap: 20px;
`
