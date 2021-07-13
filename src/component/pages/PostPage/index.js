import React, { useEffect, useState } from "react";
import PostList from "../../../data/post/list.json";

import { 
    BaseLayout, 
    HeaderLayout, Title,
    ContentLayout, PaperLayout, 
    CategoryLayout, Category, 
    ListLayout, ListOverlay, ListContainer
} from "./style";
import PostCard from "../../common/PostCard";
import TransparentButton from "../../common/TransparentButton";
import { IoChevronBackOutline } from "react-icons/io5";

function PostPage(props)
{
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
                            onClick={() => { selectCategory() }}>추천</Category>
                        <Category
                            selected={ selectedCategory === '정보 노트' ? true : false }
                            onClick={() => { selectCategory('정보 노트') }}>정보 노트</Category>
                        <Category
                            selected={ selectedCategory === '코딩 노트' ? true : false }
                            onClick={() => { selectCategory('코딩 노트') }}>코딩 노트</Category>
                        <Category
                            selected={ selectedCategory === '나무 노트' ? true : false }
                            onClick={() => { selectCategory('나무 노트') }}>나무 노트</Category>
                    </CategoryLayout>
                    <ListLayout>
                        <ListOverlay/>
                        <ListContainer>
                            {filteredPosts.map((post, index) => 
                                <PostCard 
                                    key={index}
                                    title={post.title}
                                    thumbnail={require(`../../../data/post/${post.id}/thumbnail.png`).default}
                                    date={post.date}
                                    tag={post.tag}
                                    link={`/post/${post.id}`}/>
                            )}
                        </ListContainer>
                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default PostPage;