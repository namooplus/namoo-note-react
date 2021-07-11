import React from "react";
import { 
    BaseLayout, 
    HeaderLayout, Title,
    ContentLayout, PaperLayout, 
    CategoryLayout, Category, 
    ListLayout
} from "./style";
import TransparentButton from "../../common/TransparentButton";
import PostCard from "../../common/PostCard";
import { IoChevronBackOutline } from "react-icons/io5";

function BlogPage(props)
{
    return (
        <BaseLayout>
            <HeaderLayout>
                <Title>나무의 노트</Title>
            </HeaderLayout>
            <ContentLayout>
                <PaperLayout padding="10px" animate>
                    <TransparentButton route="/"><IoChevronBackOutline fontSize="1.4rem"/></TransparentButton>
                </PaperLayout>
                <PaperLayout padding="0">
                    <CategoryLayout>
                        <Category selected>추천</Category>
                        <Category>카테고리 1</Category>
                        <Category>카테고리 2</Category>
                        <Category>카테고리 3</Category>
                    </CategoryLayout>
                    <ListLayout>
                        <PostCard title="테스트 게시물 제목" date="2021.07.07" tags={["Test1","Test2"]} route="/post/1"/>
                        <PostCard title="테스트 게시물 제목" date="2021.07.07" tags={["Test1","Test2"]} route="/post/2"/>
                        <PostCard title="테스트 게시물 제목" date="2021.07.07" tags={["Test1","Test2"]} route="/post/3"/>
                        <PostCard title="테스트 게시물 제목" date="2021.07.07" tags={["Test1","Test2"]} route="/post/3"/>
                        <PostCard title="테스트 게시물 제목" date="2021.07.07" tags={["Test1","Test2"]} route="/post/3"/>
                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default BlogPage;