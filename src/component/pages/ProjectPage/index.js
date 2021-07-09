import React from "react";
import { 
    BaseLayout, 
    HeaderLayout, Title,
    ContentLayout, PaperLayout, CategoryLayout, Category, ListLayout
} from "./style";
import TransparentButton from "../../common/TransparentButton";
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
                        <Category selected>안드로이드</Category>
                        <Category>리액트</Category>
                        <Category>드로잉</Category>
                    </CategoryLayout>
                    <ListLayout>

                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default ProjectPage;