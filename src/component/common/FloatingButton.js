import styled from "styled-components";

function FloatingButton(props)
{
    return <Button>{props.children}</Button>;
}

export default FloatingButton;

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 20px lightgray;
    color: black;
    transition: background-color 200ms, box-shadow 200ms;

    &:hover {
        box-shadow: 0 0 40px gray;
    }
    &:active {
        background-color: #EEEEEE;
    }
`