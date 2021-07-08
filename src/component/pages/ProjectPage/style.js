import styled from "styled-components";

export const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: row nowrap;
    background-color: #ebfffb;
`
export const HeaderLayout = styled.div`
    display: flex;
    width: 30%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`
export const ContentLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    justify-content: flex-start;
`