import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PostList from "../../../data/post/list.json";

import { 
    BaseLayout, 
    HeaderLayout, LinkWrapper, Title, CategoryLayout, Category,
    ContentLayout,
    OverlayLayout
} from "./style";
import PostCard from "../../common/PostCard";

function PostPage(props)
{
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    const selectCategory = (category) => {
        // 카테고리 변경
        if (category) setSelectedCategory(category);
        else setSelectedCategory('');

        // 포스트 리스트 업데이트
        const filteredList = category 
            ? PostList.filter(post => post.category === category) 
            : PostList.filter(post => post.recommend === true);
        setFilteredPosts(filteredList);
    };

    useEffect(() => {
        selectCategory();
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <LinkWrapper to="/"><Title>나무의{isMobile || <br/>}노트</Title></LinkWrapper>
                <CategoryLayout>
                    <Category
                        selected={ selectedCategory === '' ? true : false }
                        onClick={() => { selectCategory() }}>추천</Category>
                    <Category
                        selected={ selectedCategory === '정보' ? true : false }
                        onClick={() => { selectCategory('정보') }}>정보</Category>
                    <Category
                        selected={ selectedCategory === '코딩' ? true : false }
                        onClick={() => { selectCategory('코딩') }}>코딩</Category>
                    <Category
                        selected={ selectedCategory === '나무' ? true : false }
                        onClick={() => { selectCategory('나무') }}>나무</Category>
                </CategoryLayout>
            </HeaderLayout>
            <ContentLayout>
                {filteredPosts.map((post, index) => 
                <PostCard 
                    key={index}
                    title={post.title}
                    thumbnail={require(`../../../data/post/${post.id}/thumbnail.png`).default}
                    date={post.date}
                    tag={post.tag}
                    link={`/post/${post.id}`}/>)}
            </ContentLayout>
            <OverlayLayout/>
        </BaseLayout>
    );
}

export default PostPage;