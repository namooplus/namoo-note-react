import { 
    BaseContainer, 
    SectionContainer, Title, Introduction, ButtonContainer
} from "./style";
import SimpleButton from "../../common/SimpleButton";
// import IconButton from "../../common/IconButton";
// import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
};

export const Group = {
    Overview: function(props) {
        return (
            <SectionContainer>
                <Title>안녕하세요!<br/>저는 나무입니다.</Title>
                <Introduction>
                    현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다.<br/>
                    앱/웹/프로그램 개발 경험이 있으며 특히 UI/UX에 관심이 많습니다!<br/>
                    최근에는 알고리즘 공부로 고통받고 있습니다 ㅜㅜ<br/>
                    '프로젝트'를 눌러 지금까지 참여한 프로젝트들을 확인할 수 있습니다.<br/>
                    추가로 블로그도 운영하고 있으니 한 번씩 구경해주세요 :)
                </Introduction>
            </SectionContainer>
        );
    },
    Experience: function(props) {
        return (
            <SectionContainer>
                <Title>저는 이러한 경험이 있어요!</Title>
                <Introduction>
                    현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다.<br/>
                    앱/웹/프로그램 개발 경험이 있으며 특히 UI/UX에 관심이 많습니다!<br/>
                    최근에는 알고리즘 공부로 고통받고 있습니다 ㅜㅜ<br/>
                    '프로젝트'를 눌러 지금까지 참여한 프로젝트들을 확인할 수 있습니다.<br/>
                    추가로 블로그도 운영하고 있으니 한 번씩 구경해주세요 :)
                </Introduction>
            </SectionContainer>
        );
    },
    Contact: function(props) {
        return (
            <SectionContainer>
                <Title>더 알아보고 싶나요?</Title>
                <Introduction>
                    현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다.<br/>
                    앱/웹/프로그램 개발 경험이 있으며 특히 UI/UX에 관심이 많습니다!<br/>
                    최근에는 알고리즘 공부로 고통받고 있습니다 ㅜㅜ<br/>
                    '프로젝트'를 눌러 지금까지 참여한 프로젝트들을 확인할 수 있습니다.<br/>
                    추가로 블로그도 운영하고 있으니 한 번씩 구경해주세요 :)
                </Introduction>
                <ButtonContainer>
                    <SimpleButton>인스타그램</SimpleButton>
                    <SimpleButton>깃허브</SimpleButton>
                </ButtonContainer>
            </SectionContainer>
        );
    },
};

export const Element = {

};