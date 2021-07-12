import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router";
import PostList from "../../../post/PostList";

import { 
    BaseLayout,
    HeaderLayout, Title, Description, 
    ContentLayout, Post,
    OverlayLayout, GuideLabel, Decoration,
    MenuLayout
} from "./style";
import FloatingButton from "../../common/FloatingButton";
import { IoCloseOutline, IoShareSocialOutline, IoChatboxOutline, IoArrowUpOutline } from "react-icons/io5";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./render.css";

function PostDetailPage(props)
{
    const { id } = useParams();

    const [headerScrollDegree, setHeaderScrollDegree] = useState(0);
    const [selectedPostInfo, setSelectedPostInfo] = useState();
    const [selectedPostContent, setSelectedPostContent] = useState('');

    const updateHeaderScrollDegree = () => {
        const scrollDegree = window.scrollY / window.innerHeight;
        setHeaderScrollDegree(scrollDegree > 1 ? 1 : scrollDegree);
    };

    useEffect(() => {
        // 스크롤 이벤트
        window.addEventListener('scroll', updateHeaderScrollDegree);

        // 포스트 정보 불러오기
        setSelectedPostInfo(PostList.find(post => post.id === id));

        // 포스트 내용 불러오기
        try 
        {
            const md = require(`../../../post/${id}/content.md`).default;
            fetch(md).then(res => res.text()).then(content => setSelectedPostContent(content));
        }
        catch(e) { setSelectedPostContent('e'); }

        return () => window.removeEventListener('scroll', updateHeaderScrollDegree);
    }, [id]);

    // md 렌더링
    const renderer = {
        h1: ({children, ...props}) => (
            <div>
                <br/>
                <hr className="divider" {...props}/>
                <h1 className="subtitle">{children}</h1>
                <hr className="divider" {...props}/>
            </div>
        ),
        hr: ({...props}) => <hr className="divider" {...props}/>,
        a: ({children, ...props}) => <a className="link" {...props}>{children}</a>,
        img: ({src, src2, width, width2, alt, ...props}) => (
            <div className="image-container">
                <div className="image-list">
                    <img className="image" src={require(`../../../post/${id}/${src}`).default} alt={alt} width={width} {...props}/>
                    {src2 && <img className="image" src={require(`../../../post/${id}/${src2}`).default} width={width2} alt={alt} {...props}/>}
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

    // 클릭 이벤트
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

    return (
        selectedPostContent !== 'e' ? (
        <BaseLayout whiteDegree={headerScrollDegree}>
            {/* 헤더 */}
            <HeaderLayout opacity={1 - headerScrollDegree * 0.8}>
                <Title>{selectedPostInfo?.title}</Title>
                <Description>{selectedPostInfo?.id.split('~')[0]}</Description>
            </HeaderLayout>
            {/* 내용 */}
            <ContentLayout>
                <Post>
                    <ReactMarkdown
                        remarkPlugins={[gfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={renderer}
                        children={selectedPostContent}/>
                </Post>
            </ContentLayout>
            {/* 오버레이 */}
            <OverlayLayout opacity={1 - headerScrollDegree}>
                <GuideLabel>⌵</GuideLabel>
                <Decoration top="-10rem" left="10rem">나</Decoration>
                <Decoration bottom="-8rem" right="10rem">무</Decoration>
            </OverlayLayout>
            {/* 플로팅 메뉴 */}
            <MenuLayout top="0" left="0">
                <FloatingButton route="/post"><IoCloseOutline fontSize="1.4rem"/></FloatingButton>
            </MenuLayout>
            <MenuLayout opacity={headerScrollDegree} bottom="0" right="0">
                <FloatingButton><IoShareSocialOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton><IoChatboxOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton onClick={scrollTop}><IoArrowUpOutline fontSize="1.4rem"/></FloatingButton>
            </MenuLayout>
        </BaseLayout>) : <Redirect to="/error"/>
    );
}

export default PostDetailPage;