import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import IntroPage from "./component/pages/IntroPage/index";
import BlogPage from "./component/pages/BlogPage/index";
import ProjectPage from "./component/pages/ProjectPage/index";
import PostPage from "./component/pages/PostPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage}/>

        <Route exact path="/blog" component={BlogPage}/>
        <Route exact path="/project" component={ProjectPage}/>
        <Route exact path="/post/:postId" component={PostPage}/>

        <Route exact path="/error" component={ErrorPage}/>

        <Route component={() => <Redirect to="/error"/>}/>
      </Switch>
    </Router>
  );
}

export default App;
