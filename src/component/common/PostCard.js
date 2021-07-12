import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PostCard(props)
{
    return (
        <Link style={{textDecoration: "none"}} to={props.link}>
            <CardLayout>
                <Thumbnail src={props.thumbnail}/>
                <DescriptionLayout>
                    <Title>{props.title}</Title>
                    <Date>{props.date}</Date>
                    <TagLayout>{props.tag.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagLayout>
                </DescriptionLayout>
            </CardLayout>
        </Link>
    );
}

export default PostCard;

const CardLayout = styled.div`
    display: flex;
    height: 150px;
    flex-flow: row nowrap;
    box-shadow: 0 0 10px lightgray;
    transition: background-color 500ms;

    &:hover {
        background-color: #eeeeee;
    }
    &:active {
        background-color: #dddddd;
    }
`
const Thumbnail = styled.img`
    width: 150px;
    height: 150px;
`
const DescriptionLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    padding: 20px;
    gap: 7px;
`
const Title = styled.h3`
    margin: 0;
    color: black;
    font-size: 1.3rem;
`
const Date = styled.span`
    margin: 0;
    color: gray;
    font-size: 1rem;
`
const TagLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: row nowrap;
    align-items: flex-end;
    gap: 7px;
`
const Tag = styled.span`
    padding: 5px 7px;
    background: skyblue;
    color: black;
    font-size: 0.7rem;
`