import React from "react";
import PostList from "../../../post/PostList";

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
                        {PostList.map((post, index) => 
                            <PostCard 
                                key={index}
                                title={post.title}
                                thumbnail={require(`../../../post/${post.id}/thumbnail.png`).default}
                                date={post.id.substring(0, 10)}
                                tags={post.tag}
                                link={`/post/${post.id}`}/>
                        )}
                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default BlogPage;