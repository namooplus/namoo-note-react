import styled from "styled-components";

export const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: #ebfffb;
    align-items: center;
`

// 커버
export const CoverLayout = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
export const Title = styled.h1`
    margin: 0;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 1rem;
`
export const PencilLayout = styled.div.attrs(props => ({
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
    align-items: flex-start;
    background-color: #ebfffb;
    transform: rotate(45deg);
`
export const Pencil = styled.div`
    height: 350px;
    width: 20px;
    background-color: black;
`


// 내용
export const ContentLayout = styled.div`
    display: flex;
    width: 600px;
    height: 80vh;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`
export const Paragraph = styled.p`
    font-size: 1rem;
    color: black;
`
export const ButtonLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
`

// 가이드
export const GuideLabel = styled.span.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    width: 100%;
    bottom: 0;
    margin-bottom: 30px;
    font-size: 2.5rem;
    text-align: center;
    color: black;
`