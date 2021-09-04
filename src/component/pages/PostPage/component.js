import { Redirect } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import mdRenderer from "../../../util/mdRenderer";

import {
    BaseContainer,
    SubHeaderContainer, Title, Date, TagLayout, Tag,
    PostContainer,
    MenuContainer,
    CommentContainer
} from "./style";
import FloatingButton from "../../common/button/FloatingButton";
import { IoChatboxOutline, IoArrowUpOutline } from "react-icons/io5";

export const Container = {
    Base: function(props) {
        return (<>{props.postContent !== 'e'
            ? <BaseContainer>{props.children}</BaseContainer>
            : <Redirect to="/error"/>
        }</>)
    },
    SubHeader: function(props) {
        return <SubHeaderContainer>{props.children}</SubHeaderContainer>
    },
};

export const Group = {
    Tag: function(props) {
        return (
            <TagLayout>
                <Tag>{props.postInfo?.category}</Tag>&gt;
                {props.postInfo?.tag.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
            </TagLayout>
        )
    },
    Post: function(props) {
        return (
            <PostContainer>
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={mdRenderer(props.id, props.type)}
                    children={props.content}/>
            </PostContainer>
        )
    },
    Menu: function(props) {
        return (
            <MenuContainer>
                <FloatingButton icon={IoChatboxOutline} onClick={props.toggleComment}/>
                <FloatingButton icon={IoArrowUpOutline} onClick={props.scrollTop} />
            </MenuContainer>
        )
    },
    Comment: function(props) {
        return (
            <CommentContainer open={props.open}>

            </CommentContainer>
        )
    },
};

export const Element = {
    Title: function(props) {
        return <Title>{props.children}</Title>
    },
    Date: function(props) {
        return <Date>{props.children}</Date>
    },
};