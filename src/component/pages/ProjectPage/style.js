import styled from "styled-components";

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
export const PaperLayout = styled.div.attrs(props => ({
    style: {
        transform: `translate(${props.translate}) rotate(${props.rotate})`
    }
}))`
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
`
export const Subtitle = styled.h2`
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
`