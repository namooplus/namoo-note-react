import React from "react";
import { 
    BaseLayout, 
    HeaderLayout, Title,
    ContentLayout, PaperLayout, Subtitle,
    MenuLayout
} from "./style";
import FloatingButton from "../../common/FloatingButton";
import { IoHomeOutline } from "react-icons/io5";

function BlogPage(props)
{
    return (
        <BaseLayout>
            <HeaderLayout>
                <Title>나무의 노트</Title>
            </HeaderLayout>
            <ContentLayout>
                <PaperLayout translate="-20px" rotate="1.5deg"/>
                <PaperLayout>
                    <Subtitle>추천 게시물</Subtitle>
                </PaperLayout>
            </ContentLayout>
            <MenuLayout>
                <FloatingButton route="/"><IoHomeOutline fontSize="1.4rem"/></FloatingButton>
            </MenuLayout>
        </BaseLayout>
    );
}

export default BlogPage;