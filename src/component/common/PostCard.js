import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PostCard(props)
{
    return (
        <LinkWrapper to={props.link}>
            <CardLayout>
                <Thumbnail src={props.thumbnail}/>
                <DescriptionLayout>
                    <Title>{props.title}</Title>
                    <Date>{props.date}</Date>
                    <TagLayout>{props.tag.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagLayout>
                </DescriptionLayout>
            </CardLayout>
        </LinkWrapper>
    );
}

export default PostCard;

const LinkWrapper = styled(Link)`
    text-decoration: none;
`
const CardLayout = styled.div`
    display: flex;
    width: 300px;
    flex-flow: column nowrap;
    background-color: white;
    box-shadow: 0 0 10px lightgray;
    transition: box-shadow 500ms, opacity 500ms;

    &:hover {
        box-shadow: 0 0 30px gray;
    }
    &:active {
        opacity: 0.5;
    }
`
const Thumbnail = styled.img`
    height: 200px;
    object-fit: cover;
`
const DescriptionLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 20px;
    box-sizing: border-box;
    gap: 7px;
    background-color: white;
`
const Title = styled.h3`
    margin: 0;
    color: black;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Date = styled.span`
    margin: 0;
    font-size: 0.8rem;
    color: gray;
`
const TagLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 4px;
    gap: 7px;
`
const Tag = styled.span`
    padding: 5px 7px;
    font-size: 0.7rem;
    background: #21D1C2;
    color: white;
`