import React from "react";

import { 
    BaseLayout, FrameLayout, 
    Greeting, Introduction, LinkLayout,
    Pencil
} from "./style";
import SimpleButton from "../../common/SimpleButton";
import IconButton from "../../common/IconButton";
import PencilIcon from "../../../image/pencil.PNG";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

function IntroPage(props)
{
    return (
        <BaseLayout>
            {/* 첫번째 프레임 */}
            <FrameLayout backgroundColor="#21D1C2">
                <Greeting>안녕하세요!<br/>저는<br/>나무입니다.</Greeting>
            </FrameLayout>
            {/* 두번째 프레임 */}
            <FrameLayout align="flex-end">
                <LinkLayout>
                    <IconButton icon={IoLogoGithub} onClick={() => window.open('https://github.com/namooplus')}/>
                    <IconButton icon={IoLogoInstagram} onClick={() => window.open('https://www.instagram.com/min.i.stop/')}/>
                </LinkLayout>
                <Introduction>
                    현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다 :)<br/>
                    안드로이드 앱 개발과 더불어 React를 이용한 웹 개발을 도전하고 있습니다.<br/>
                    특히 UI/UX에 관심이 많으며 심심할 때 그림도 그립니다!<br/>
                    '프로젝트'를 눌러 지금까지 직접 참여한 프로젝트들을 확인할 수 있습니다.<br/>
                    정리 및 공유를 위한 블로그도 운영하고 있으니 한 번씩 구경해주세요~
                </Introduction>
                <LinkLayout>
                    <SimpleButton route="/project">프로젝트</SimpleButton>
                    <SimpleButton route="/post">블로그</SimpleButton>
                </LinkLayout>
            </FrameLayout>
            {/* 오버레이 */}
            <Pencil src={PencilIcon}/>
        </BaseLayout>
    );
}

export default IntroPage;