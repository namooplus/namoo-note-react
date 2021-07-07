import React from "react";
import { BaseLayout } from "./style";
import { useParams } from "react-router";

function PostPage(props)
{
    const { id } = useParams();

    return (
        <BaseLayout>
            {id}-th PostPage
        </BaseLayout>
    );
}

export default PostPage;