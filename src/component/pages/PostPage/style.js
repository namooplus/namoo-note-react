import styled from "styled-components";

export const BaseLayout = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-flow: column nowrap;
`

// 내용
export const ContentLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    align-items: center;
    padding: 50px;
    box-sizing: border-box;
    gap: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
`
export const Title = styled.h1`
    margin: 0;
    color: black;
    font-size: 2.5rem;
    text-align: center;
`
export const Date = styled.h2`
    margin: 0;
    color: gray;
    font-size: 1.3rem;
    font-weight: 300;
`
export const TagLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 7px;
    margin-top: 5px;
`
export const Tag = styled.span`
    padding: 5px 7px;
    background: #21D1C2;
    color: white;
    font-size: 0.7rem;
`
export const Divider = styled.hr`
    width: 100%;
    margin-top: 35px;
    border: 1px solid lightgray;
    transform: scaleY(0.5);
`
export const Post = styled.div`
    width: 700px;
    margin: 0 30px;

    @media only screen and (max-width: 1100px) {
        width: 100%;
    }
`

// 플로팅
export const MenuLayout = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    margin: 50px;
    gap: 20px;
`