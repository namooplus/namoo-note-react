import React from "react";
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
                        <Category selected>앱</Category>
                        <Category>웹</Category>
                        <Category>드로잉</Category>
                    </CategoryLayout>
                    <ListLayout>
                        <ProjectCard title="테스트 프로젝트" tags={["Android","Kotlin"]} route="/post/1"/>
                        <ProjectCard title="테스트 프로젝트" tags={["Android","Kotlin"]} route="/post/1"/>
                        <ProjectCard title="테스트 프로젝트" tags={["Android","Kotlin"]} route="/post/1"/>
                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default ProjectPage;