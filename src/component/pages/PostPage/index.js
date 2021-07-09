import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { 
    BaseLayout,
    HeaderLayout, Title, Description, 
    ContentLayout, Post,
    OverlayLayout, GuideLabel, Decoration,
    FloatingLayout
} from "./style";
import FloatingButton from "../../common/FloatingButton";
import { IoShareSocialOutline, IoChatboxOutline, IoArrowUpOutline } from "react-icons/io5";

function PostPage(props)
{
    const { id } = useParams();

    const [headerScrollDegree, setHeaderScrollDegree] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollDegree = window.scrollY / window.innerHeight;
            setHeaderScrollDegree(scrollDegree > 1 ? 1 : scrollDegree);
        })
    }, []);

    function scrollTop()
    {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    return (
        <BaseLayout whiteDegree={headerScrollDegree}>
            {/* 헤더 */}
            <HeaderLayout opacity={1 - headerScrollDegree * 0.8}>
                <Title>테스트 게시물 제목</Title>
                <Description>2021.07.07</Description>
            </HeaderLayout>
            {/* 내용 */}
            <ContentLayout>
                <Post>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                    {id}-th PostPage 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용
                    테스트 내용 테스트 내용 테스트 내용 테스트 내용 <br/><br/>
                </Post>
            </ContentLayout>
            {/* 오버레이 */}
            <OverlayLayout opacity={1 - headerScrollDegree}>
                <GuideLabel>⌵</GuideLabel>
                <Decoration top="-10rem" left="10rem">나</Decoration>
                <Decoration bottom="-8rem" right="10rem">무</Decoration>
            </OverlayLayout>
            {/* 플로팅 메뉴 */}
            <FloatingLayout opacity={headerScrollDegree}>
                <FloatingButton><IoShareSocialOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton><IoChatboxOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton onClick={scrollTop}><IoArrowUpOutline fontSize="1.4rem"/></FloatingButton>
            </FloatingLayout>
        </BaseLayout>
    );
}

export default PostPage;