import styled from "styled-components";

function SimpleButton(props)
{
    return <Button>{props.children}</Button>;
}

export default SimpleButton;

const Button = styled.button`
    width: 130px;
    height: 40px;
    background-color: black;
    color: white;
    border: none;
    transition: background-color 200ms;

    &:hover {
        background-color: #555555;
    }
    &:active {
        background-color: #333333;
    }
`