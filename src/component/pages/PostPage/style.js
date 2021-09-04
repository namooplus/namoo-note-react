import styled from "styled-components";

export const BaseContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
`

export const SubHeaderContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    padding: 110px 0 30px 0;
    gap: 10px;
    z-index: 30;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(10px);
`
export const Title = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 2.5rem;
    color: black;
    
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`
export const Date = styled.h2`
    margin: 0;
    font-size: 1.3rem;
    font-weight: 300;
    color: gray;

    @media only screen and (max-width: 768px) {
        font-size: 1.1rem;
    }
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

export const PostContainer = styled.div`
    display: flex;
    width: 768px;
    flex-flow: column nowrap;
    padding: 0 30px 30px 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

export const MenuContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    z-index: 40;
`

export const CommentContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column nowrap;
    z-index: 35;
    overflow: scroll;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(7px);
    opacity: ${props => props.open ? 1 : 0};
    pointer-events: ${props => props.open ? "auto" : "none"};
    transition: opacity .3s;
`