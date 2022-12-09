import Login from "./Pages/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup/signup";
import About from "./Pages/About";
import WritePage from "./Pages/Write/WritePage";
import MyPosts from "./Pages/MyPosts/MyPosts";
import SinglePost from "./Pages/singlePost/SinglePost";
import Settings from "./Pages/Settings/settings.jsx";

import './App.styles.scss'

import FullPage from "./Pages/FullPage";
export default function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
           <FullPage/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Settings />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/write">
            <WritePage />
          </Route>
          <Route path="/myposts">
            <MyPosts />
          </Route>
          <Route path="/post/:id">
            <SinglePost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
