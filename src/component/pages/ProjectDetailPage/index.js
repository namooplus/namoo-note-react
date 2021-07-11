import React from "react";
import { useParams } from "react-router";

import { 
    BaseLayout
} from "./style";

function ProjectDetailPage(props)
{
    const { id } = useParams();

    return (
        <BaseLayout>
            Project : {id}
        </BaseLayout>
    );
}

export default ProjectDetailPage;