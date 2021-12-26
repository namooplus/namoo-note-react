import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import IntroPage from "./component/pages/IntroPage/index";
import ListPage from "./component/pages/ListPage/index";
import PostPage from "./component/pages/PostPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";

import { Container, Group } from "./App.component";

function App() 
{
    return (
        <Container.Base>
            {/* 헤더 */}
            <Group.Header/>
            {/* 내용 */}
            <Switch>
                <Route exact path="/" component={IntroPage}/>
                <Route exact path="/blog/:category" component={() => <ListPage type="blog"/>}/>
                <Route exact path="/project/:category" component={() => <ListPage type="project"/>}/>
                <Route exact path="/blog/:category/:id" component={() => <PostPage type="blog"/>}/>
                <Route exact path="/project/:category/:id" component={() => <PostPage type="project"/>}/>
                <Route exact path="/error" component={ErrorPage}/>

                <Route exact path="/blog" component={() => <Redirect to="/blog/맥"/>}/>
                <Route exact path="/project" component={() => <Redirect to="/project/앱"/>}/>
                <Route component={() => <Redirect to="/error"/>}/>
            </Switch>
        </Container.Base>
    );
}

export default App;