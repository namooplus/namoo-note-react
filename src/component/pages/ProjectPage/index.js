import React, { useEffect, useState } from "react";
import ProjectList from "../../../data/project/list.json";

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
    const [filteredProjects, setFilteredProjects] = useState([]);

    const selectCategory = (category) => {
        // 카테고리 변경
        setSelectedCategory(category);

        // 프로젝트 리스트 업데이트
        const filteredList = ProjectList.filter(project => project.category === category);
        setFilteredProjects(filteredList);
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
                {filteredProjects.map((project, index) => 
                <PostCard 
                    key={index}
                    title={project.title}
                    thumbnail={require(`../../../data/project/${project.id}/thumbnail.png`).default}
                    date={project.date}
                    tag={project.tag}
                    link={`/project/${project.id}`}/>)}
            </ContentLayout>
            <OverlayLayout/>
        </BaseLayout>
    );
}

export default ProjectPage;