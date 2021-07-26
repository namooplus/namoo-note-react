import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useParams } from "react-router";

import { 
    BaseLayout,
    HeaderLayout,
    ContentLayout, Title, Description, TagLayout, Tag, Divider, Post,
    MenuLayout
} from "./style";
import IconButton from "../../common/IconButton";
import FloatingButton from "../../common/FloatingButton";
import { IoChevronBackOutline, IoMenu, IoChatboxOutline, IoArrowUpOutline } from "react-icons/io5";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./render.css";

function PostPage(props)
{
    // Initialize post
    const { postId } = useParams();
    const postType = postId.match(/^\d/) ? 'blog' : 'project';
    const postList = require(`../../../post/${postType}/list.json`);
    const [postInfo, setPostInfo] = useState();
    const [postContent, setPostContent] = useState('');

    // Initialize page
    useEffect(() => {
        // Get post info
        setPostInfo(postList.find(post => post.id === postId));

        // Get post text
        try 
        {
            const md = require(`../../../post/${postType}/${postId}/content.md`).default;
            fetch(md).then(res => res.text()).then(content => setPostContent(content));
        }
        catch(e) { setPostContent('e'); }
    }, [postId, postType, postList]);

    // MD rendering option
    const renderOption = {
        h1: ({children, ...props}) => (
            <div>
                <br/>
                <hr className="divider"/>
                <h1 className="subtitle" {...props}>{children}</h1>
                <hr className="divider"/>
            </div>
        ),
        p: ({children, ...props}) => <p className="paragraph" {...props}>{children}</p>,
        strong: ({children, ...props}) => <strong className="strong" {...props}>{children}</strong>,
        extra: ({children, ...props}) => <span className="extra" {...props}>{children}</span>,
        blockquote: ({children, ...props}) => <blockquote className="quote" {...props}>{children}</blockquote>,
        ol: ({children, ordered, ...props}) => <ol className="ordered-list" ordered={ordered.toString()} {...props}>{children}</ol>,
        a: ({children, ...props}) => <a className="link" {...props}>{children}</a>,
        hr: ({...props}) => <hr className="divider" {...props}/>,
        img: ({src, src2, width, width2, alt, ...props}) => (
            <div className="image-container">
                <div className="image-list">
                    <img className="image" src={require(`../../../post/${postType}/${postId}/${src}`).default} width={width} alt={alt} {...props}/>
                    {src2 && <img className="image" src={require(`../../../post/${postType}/${postId}/${src2}`).default} width={width2} alt={alt} {...props}/>}
                </div>
                <span className="image-description">{alt}</span>
            </div>),
        code: ({node, inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={materialDark} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        }
    }

    // Click event
    const pushLink = (route) => props.history.push(route);
    const goBack = () => props.history.goBack();
    const scrollTop = () => document.getElementById("content").scrollTo({ top: 0, behavior: 'smooth'});

    return (
        postContent !== 'e' ? (
        <BaseLayout>
            {/* 헤더 */}
            <HeaderLayout>
                <IconButton icon={IoChevronBackOutline} color="white" size="1.7rem" onClick={goBack}/>
                <IconButton icon={IoMenu} color="white" size="1.7rem" onClick={() => pushLink("/")}/>
            </HeaderLayout>
            {/* 내용 */}
            <ContentLayout id="content">
                <Title>{postInfo?.title}</Title>
                <Description>{postInfo?.date}</Description>
                <TagLayout>
                    <Tag>{postInfo?.category}</Tag>
                    {">"}
                    {postInfo?.tag.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </TagLayout>
                <Divider/>
                <Post>
                    <ReactMarkdown
                        remarkPlugins={[gfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={renderOption}
                        children={postContent}/>
                </Post>
            </ContentLayout>
            {/* 플로팅 메뉴 */}
            <MenuLayout>
                <FloatingButton icon={IoChatboxOutline}/>
                <FloatingButton onClick={scrollTop} icon={IoArrowUpOutline}/>
            </MenuLayout>
        </BaseLayout>) : <Redirect to="/error"/>
    );
}

export default withRouter(PostPage);