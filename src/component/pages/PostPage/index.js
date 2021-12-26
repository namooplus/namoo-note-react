import React from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import { usePostContent } from "../../../util/hooks";

import Meta from "../../../util/Meta";
import { Container, Group } from "./component";

function PostPage(props)
{
    // 포스트 정보
    const type = props.type;
    const { category, id } = useParams();
    const title = id.split('~')[1].replace(/_/g, ' ');
    const date = id.split('~')[0];
    const content = usePostContent(type, category, id);

    return (
        <Container.Base>
            <Meta title={title}/>
            <Group.SubHeader title={title} date={date} category={category}/>
            <Group.Post type={type} category={category} id={id} content={content}/>
            <Group.Comment/>
            <Group.Menu/>
        </Container.Base>
    );
}

export default withRouter(PostPage);