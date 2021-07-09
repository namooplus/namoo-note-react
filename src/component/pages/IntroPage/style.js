import styled from "styled-components";

export const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: #ebfffb;
`
export const FrameLayout = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

// 첫번째 프레임
export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 1rem;
`
export const CoverLayout = styled.div.attrs(props => ({
    style: {
        width: props.width
    }
}))`
    position: absolute;
    left: 0;
    display: flex;
    height: 100vh;
    flex-flow: row-reverse nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: #ebfffb;
    transform: rotate(10deg);
`
export const Pencil = styled.div`
    height: 350px;
    width: 20px;
    background-color: black;
`

// 두번째 프레임
export const PaperLayout = styled.div.attrs(props => ({
    style: {
        boxShadow: `0 0 ${props.shadowRadius} lightgray`,
        transform: `translate(${props.translate}) rotate(${props.rotate})`
    }
}))`
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 400px;
    box-sizing: border-box;
    padding: 20px;
    background-color: white;
`
export const Image = styled.div`
    width: 60px;
    height: 60px;
    background-color: gray;
`
export const Paragraph = styled.p`
    margin: 30px 0;
    line-height: 1.4rem;
    font-size: 0.9rem;
    color: black;
`
export const ButtonLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
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