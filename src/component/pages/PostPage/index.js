import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { 
    BaseLayout,
    HeaderLayout, Title, Description, 
    ContentLayout, Post,
    OverlayLayout, GuideLabel, Decoration,
    MenuLayout
} from "./style";
import FloatingButton from "../../common/FloatingButton";
import { IoCloseOutline, IoShareSocialOutline, IoChatboxOutline, IoArrowUpOutline } from "react-icons/io5";

function PostPage(props)
{
    const { id } = useParams();

    const [headerScrollDegree, setHeaderScrollDegree] = useState(0);

    const updateHeaderScrollDegree = () => {
        const scrollDegree = window.scrollY / window.innerHeight;
        setHeaderScrollDegree(scrollDegree > 1 ? 1 : scrollDegree);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateHeaderScrollDegree);
        return () => window.removeEventListener('scroll', updateHeaderScrollDegree);
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
            <MenuLayout top="0" left="0">
                <FloatingButton route="/blog"><IoCloseOutline fontSize="1.4rem"/></FloatingButton>
            </MenuLayout>
            <MenuLayout opacity={headerScrollDegree} bottom="0" right="0">
                <FloatingButton><IoShareSocialOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton><IoChatboxOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton onClick={scrollTop}><IoArrowUpOutline fontSize="1.4rem"/></FloatingButton>
            </MenuLayout>
        </BaseLayout>
    );
}

export default PostPage;