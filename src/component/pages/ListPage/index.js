import React from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import { usePostList, useCategoryList } from "../../../util/hooks";

import Meta from "../../../util/Meta";
import { Container, Group } from "./component";

function ListPage(props)
{
    const type = props.type;
    const categoryList = useCategoryList(type);
    const { category } = useParams();
    const postList = usePostList(type, category);

    // 클릭 이벤트
    const push = (route) => props.history.push(route);
    const replace = (route) => props.history.replace(route);

    return (
        <Container.Base>
            <Meta title={`나무의 노트 : ${type === 'blog' ? '블로그' : '프로젝트'}`}/>
            <Container.SubHeader>
                <Group.Category type={type} categoryList={categoryList} category={category} replace={replace}/>
            </Container.SubHeader>
            <Group.Post type={type} category={category} postList={postList} push={push}/>
        </Container.Base>
    );
}

export default withRouter(ListPage);