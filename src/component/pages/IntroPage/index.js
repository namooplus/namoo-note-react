import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Group } from "./component";

function IntroPage(props)
{
    // Click event
    const pushLink = (route) => props.history.push(route);
    const openGithub = () => window.open('https://github.com/namooplus');
    const openInstagram = () => window.open('https://www.instagram.com/min.i.stop/'); 

    return (
        <Container.Base>
            <Group.Overview/>
            <Group.Experience/>
            <Group.Contact/>
        </Container.Base>
    );
}

export default withRouter(IntroPage);