import styled from "styled-components";

function FloatingButton(props)
{
    return (
        <Button onClick={props.onClick}>
            {props.icon && <props.icon fontSize="1.4rem"/>}
        </Button>
    );
}

export default FloatingButton;

const Button = styled.button`
    width: 50px;
    height: 50px;
    padding: calc(25px - 0.7rem);
    border: none;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 10px 10px lightgray;
    color: black;
    cursor: pointer;
    transition: background-color 200ms, box-shadow 200ms;

    &:hover {
        box-shadow: 0 20px 20px lightgray;
    }
    &:active {
        background-color: #EEEEEE;
    }
`