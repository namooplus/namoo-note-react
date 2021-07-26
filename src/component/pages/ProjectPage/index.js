import React, { useEffect, useState } from "react";
import PostList from "../../../post/project/list.json";

import { 
    BaseLayout, 
    HeaderLayout, LinkWrapper, Title, CategoryLayout, Category,
    ContentLayout,
    OverlayLayout
} from "./style";
import PostCard from "../../common/PostCard";

function ProjectPage(props)
{
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    const selectCategory = (category) => {
        // 카테고리 변경
        setSelectedCategory(category);

        // 프로젝트 리스트 업데이트
        const filteredList = PostList.filter(post => post.category === category);
        setFilteredPosts(filteredList);
    };

    useEffect(() => {
        selectCategory('앱');
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <LinkWrapper to="/"><Title>나무의<br/>노트</Title></LinkWrapper>
                <CategoryLayout>
                    <Category
                        selected={ selectedCategory === '앱' ? true : false }
                        onClick={() => { selectCategory('앱') }}>앱</Category>
                    <Category
                        selected={ selectedCategory === '웹' ? true : false }
                        onClick={() => { selectCategory('웹') }}>웹</Category>
                    <Category
                        selected={ selectedCategory === '드로잉' ? true : false }
                        onClick={() => { selectCategory('드로잉') }}>드로잉</Category>
                </CategoryLayout>
            </HeaderLayout>
            <ContentLayout>
                {filteredPosts.map((post, index) => 
                <PostCard 
                    key={index}
                    title={post.title}
                    thumbnail={require(`../../../post/project/${post.id}/thumbnail.png`).default}
                    date={post.date}
                    tag={post.tag}
                    link={`/post/${post.id}`}/>)}
            </ContentLayout>
            <OverlayLayout/>
        </BaseLayout>
    );
}

export default ProjectPage;