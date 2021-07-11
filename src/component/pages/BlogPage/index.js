import React, { useEffect, useState } from "react";
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
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    const filterCategory = (category) => {
        // 카테고리 변경
        if (category) setSelectedCategory(category);
        else setSelectedCategory('');

        // 포스트 리스트 업데이트
        const filteredList = category 
            ? PostList.filter(post => post.id.split('~')[1] === category) 
            : PostList.filter(post => post.recommend === true);
        setFilteredPosts(filteredList);
    };

    useEffect(() => {
        filterCategory();
    }, []);

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
                        <Category
                            selected={ selectedCategory === '' ? true : false }
                            onClick={() => { filterCategory() }}>추천</Category>
                        <Category
                            selected={ selectedCategory === 'info' ? true : false }
                            onClick={() => { filterCategory('info') }}>정보 노트</Category>
                        <Category
                            selected={ selectedCategory === 'code' ? true : false }
                            onClick={() => { filterCategory('code') }}>코딩 노트</Category>
                        <Category
                            selected={ selectedCategory === 'namoo' ? true : false }
                            onClick={() => { filterCategory('namoo') }}>나무 노트</Category>
                    </CategoryLayout>
                    <ListLayout>
                        {filteredPosts.map((post, index) => 
                            <PostCard 
                                key={index}
                                title={post.title}
                                thumbnail={require(`../../../post/${post.id}/thumbnail.png`).default}
                                date={post.id.split('~')[0]}
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