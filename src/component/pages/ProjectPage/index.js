import React, { useEffect, useState } from "react";
import ProjectList from "../../../project/ProjectList";

import { 
    BaseLayout, 
    HeaderLayout, Title,
    ContentLayout, PaperLayout,
    CategoryLayout, Category,
    ListLayout
} from "./style";
import TransparentButton from "../../common/TransparentButton";
import ProjectCard from "../../common/ProjectCard";
import { IoChevronBackOutline } from "react-icons/io5";

function ProjectPage(props)
{
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);

    const filterCategory = (category) => {
        // 카테고리 변경
        setSelectedCategory(category);

        // 프로젝트 리스트 업데이트
        const filteredList = ProjectList.filter(project => project.id.split('~')[1] === category);
        setFilteredProjects(filteredList);
    };

    useEffect(() => {
        filterCategory('app');
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
                            onClick={() => { filterCategory('app') }}>앱</Category>
                        <Category
                            selected={ selectedCategory === 'web' ? true : false }
                            onClick={() => { filterCategory('web') }}>웹</Category>
                        <Category
                            selected={ selectedCategory === 'drawing' ? true : false }
                            onClick={() => { filterCategory('drawing') }}>드로잉</Category>
                    </CategoryLayout>
                    <ListLayout>
                        {filteredProjects.map((project, index) => 
                            <ProjectCard 
                                key={index}
                                title={project.title}
                                thumbnail={require(`../../../project/${project.id}/thumbnail.png`).default}
                                date={project.id.split('~')[0]}
                                tags={project.tag}
                                link={`/project/${project.id}`}/>
                        )}
                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default ProjectPage;