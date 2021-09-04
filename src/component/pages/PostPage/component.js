import { Redirect } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import mdRenderer from "../../../util/mdRenderer";

import {
    BaseContainer,
    SubHeaderContainer, Title, InfoContainer, Date, TagLayout, Tag,
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
};

export const Group = {
    SubHeader: function(props) {
        return (
            <SubHeaderContainer>
                <Title collapse={props.collapse}>{props.postInfo?.title}</Title>
                <InfoContainer collapse={props.collapse}>
                    <Date>{props.postInfo?.date}</Date>
                    <TagLayout>
                    <Tag>{props.postInfo?.category}</Tag>&gt;
                        {props.postInfo?.tag.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                    </TagLayout>
                </InfoContainer>
            </SubHeaderContainer>
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

};