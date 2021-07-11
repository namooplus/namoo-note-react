import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
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
        const md = require(`../../../post/${id}/content.md`).default;
        fetch(md).then(res => res.text()).then(content => setSelectedPostContent(content));

        return () => window.removeEventListener('scroll', updateHeaderScrollDegree);
    }, [id]);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

    return (
        <BaseLayout whiteDegree={headerScrollDegree}>
            {/* 헤더 */}
            <HeaderLayout opacity={1 - headerScrollDegree * 0.8}>
                <Title>{selectedPostInfo?.title}</Title>
                <Description>{selectedPostInfo?.id.split('~')[0]}</Description>
            </HeaderLayout>
            {/* 내용 */}
            <ContentLayout>
                <Post>
                    <ReactMarkdown children={selectedPostContent}/>
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
        </BaseLayout>
    );
}

export default PostDetailPage;