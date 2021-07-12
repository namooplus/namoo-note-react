import React, { useEffect, useState } from "react";
import ProjectList from "../../../data/project/list.json";

import { 
    BaseLayout, 
    HeaderLayout, Title,
    ContentLayout, PaperLayout,
    CategoryLayout, Category,
    ListLayout
} from "./style";
import ProjectCard from "../../common/ProjectCard";
import TransparentButton from "../../common/TransparentButton";
import { IoChevronBackOutline } from "react-icons/io5";

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
        selectCategory('app');
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
                            selected={ selectedCategory === 'app' ? true : false }
                            onClick={() => { selectCategory('app') }}>앱</Category>
                        <Category
                            selected={ selectedCategory === 'web' ? true : false }
                            onClick={() => { selectCategory('web') }}>웹</Category>
                        <Category
                            selected={ selectedCategory === 'drawing' ? true : false }
                            onClick={() => { selectCategory('drawing') }}>드로잉</Category>
                    </CategoryLayout>
                    <ListLayout>
                        {filteredProjects.map((project, index) => 
                            <ProjectCard 
                                key={index}
                                title={project.title}
                                thumbnail={require(`../../../data/project/${project.id}/thumbnail.png`).default}
                                date={project.date}
                                tag={project.tag}
                                link={`/project/${project.id}`}/>
                        )}
                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default ProjectPage;