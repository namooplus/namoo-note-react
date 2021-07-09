import React, { useEffect, useState } from "react";
import { 
    BaseLayout,
    HeaderLayout, Title, Description, 
    ContentLayout, Post,
    OverlayLayout, GuideLabel, Decoration,
    FloatingLayout
} from "./style";
import FloatingButton from "../../common/FloatingButton";
import { useParams } from "react-router";

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
                <FloatingButton></FloatingButton>
                <FloatingButton></FloatingButton>
                <FloatingButton></FloatingButton>
            </FloatingLayout>
        </BaseLayout>
    );
}

export default PostPage;