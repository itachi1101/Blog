import Header from "./Components/Header";
import Login from "./Pages/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup/signup";
import Setting from "./Pages/Settings/settings";
import About from "./Pages/About";
import WritePage from "./Pages/Write/WritePage";
import HomePage from "./Pages/HomePage/HomePage";
import MyPosts from "./Pages/MyPosts";
import Footer from "./Components/footer/Footer";
import SinglePost from "./Pages/singlePost/SinglePost";
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/settings">
            <Setting />
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
    </>
  );
}
