import React from "react";
import { 
    BaseLayout, 
    HeaderLayout, Title,
    ContentLayout, PaperLayout, Subtitle
} from "./style";
import TransparentButton from "../../common/TransparentButton";
import { IoChevronBackOutline } from "react-icons/io5";

function BlogPage(props)
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
                <PaperLayout padding="40px">
                    <Subtitle>추천 게시물</Subtitle>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default BlogPage;