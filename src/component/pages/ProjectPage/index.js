import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import queryString from "query-string";
import PostList from "../../../post/project/list.json";

import { 
    BaseLayout, 
    HeaderLayout, Title, CategoryLayout, Category,
    ContentLayout,
    OverlayLayout
} from "./style";
import PostCard from "../../common/PostCard";

function ProjectPage(props)
{
    // Media query
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' });

    // Category
    const category = queryString.parse(props.location.search).category;
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        // Filter posts by category
        const filteredList = PostList.filter(post => post.category === category);
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
                    <Category onClick={() => replaceLink("/project?category=앱")} selected={category === '앱'}>앱</Category>
                    <Category onClick={() => replaceLink("/project?category=웹")} selected={category === '웹'}>웹</Category>
                    <Category onClick={() => replaceLink("/project?category=드로잉")} selected={category === '드로잉'}>드로잉</Category>
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
                    onClick={() => pushLink(`/post/${post.id}`)}/>)}
            </ContentLayout>
            <OverlayLayout/>
        </BaseLayout>
    );
}

export default withRouter(ProjectPage);