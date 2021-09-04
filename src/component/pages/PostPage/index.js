import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";

import { Container, Group, Element } from "./component";

function PostPage(props)
{
    // Initialize post
    const { postId } = useParams();
    const postType = postId.match(/^\d/) ? 'blog' : 'project';
    const postList = require(`../../../post/${postType}/list.json`);
    const [postInfo, setPostInfo] = useState();
    const [postContent, setPostContent] = useState('');

    const [isCommentOpen, setCommentOpen] = useState(false);

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

        return () => { 
            setPostInfo();
            setPostContent('')
        };
    }, [props, postId, postType, postList]);

    // 클릭 이벤트
    const toggleComment = () => setCommentOpen(!isCommentOpen);
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

    return (
        <Container.Base postContent={postContent}>
            <Container.SubHeader>
                <Element.Title>{postInfo?.title}</Element.Title>
                <Element.Date>{postInfo?.date}</Element.Date>
                <Group.Tag postInfo={postInfo}/>
            </Container.SubHeader>
            <Group.Post id={postId} type={postType} content={postContent}/>
            <Group.Menu toggleComment={toggleComment} scrollTop={scrollTop}/>
            <Group.Comment open={isCommentOpen}/>
        </Container.Base>
    );
}

export default withRouter(PostPage);