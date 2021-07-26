import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import queryString from "query-string";
import PostList from "../../../post/blog/list.json";

import { 
    BaseLayout, 
    HeaderLayout, Title, CategoryLayout, Category,
    ContentLayout,
    OverlayLayout
} from "./style";
import PostCard from "../../common/PostCard";

function BlogPage(props)
{
    // Media query
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' });

    // Category
    const category = queryString.parse(props.location.search).category;
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        // Filter posts by category
        const filteredList = category 
            ? PostList.filter(post => post.category === category) 
            : PostList.filter(post => post.recommend === true);
        setFilteredPosts(filteredList);
    }, [category]);

    // Click event
    const pushLink = (route) => props.history.push(route);
    const replaceLink = (route) => props.history.replace(route);

    return (
        <BaseLayout>
            <HeaderLayout>
                <Title onClick={() => pushLink("/")}>나무의{isMobile || <br/>}노트</Title>
                <CategoryLayout>
                    <Category onClick={() => replaceLink("/blog")} selected={category === undefined}>추천</Category>
                    <Category onClick={() => replaceLink("/blog?category=정보")} selected={category === '정보'}>정보</Category>
                    <Category onClick={() => replaceLink("/blog?category=코딩")} selected={category === '코딩'}>코딩</Category>
                    <Category onClick={() => replaceLink("/blog?category=나무")} selected={category === '나무'}>나무</Category>
                </CategoryLayout>
            </HeaderLayout>
            <ContentLayout>
                {filteredPosts.map((post, index) => 
                <PostCard 
                    key={index}
                    title={post.title}
                    thumbnail={require(`../../../post/blog/${post.id}/thumbnail.png`).default}
                    date={post.date}
                    tag={post.tag}
                    onClick={() => pushLink(`/post/${post.id}`)}/>)}
            </ContentLayout>
            <OverlayLayout/>
        </BaseLayout>
    );
}

export default withRouter(BlogPage);