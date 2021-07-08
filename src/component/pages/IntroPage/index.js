import React, { useEffect, useState } from "react";
import { BaseLayout, CoverLayout, Title, PencilLayout, Pencil, ContentLayout, Paragraph, ButtonLayout, GuideLabel } from "./style";
import SimpleButton from "../../common/SimpleButton";

function IntroPage(props)
{
    const [scrollDegree, setScrollDegree] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollDegree(window.scrollY / (document.body.offsetHeight - window.innerHeight));
        });
    }, []);

    return (
        <BaseLayout>
            <CoverLayout>
                <Title>나무의 노트</Title>
                <PencilLayout width={20 + scrollDegree * 60 + '%'}>
                    <Pencil/>
                </PencilLayout>
            </CoverLayout>
            <ContentLayout>
                <Paragraph>
                    안녕하세요! 나무입니다.<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                    설명<br/>
                </Paragraph>
                <ButtonLayout>
                    <SimpleButton>더 알아보기</SimpleButton>
                    <SimpleButton>블로그</SimpleButton>
                </ButtonLayout>
            </ContentLayout>
            <GuideLabel opacity={1 - scrollDegree}>⌵</GuideLabel>
        </BaseLayout>
    );
}

export default IntroPage;