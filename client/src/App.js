import Header from "./Components/Header";
import Login from "./Pages/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup/signup";
import About from "./Pages/About";
import WritePage from "./Pages/Write/WritePage";
import HomePage from "./Pages/HomePage/HomePage";
import MyPosts from "./Pages/MyPosts/MyPosts";
import Footer from "./Components/footer/Footer";
import SinglePost from "./Pages/singlePost/SinglePost";
import Settings from "./Pages/Settings/settings.jsx";
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
        <Footer/>
      </Router>
    </>
  );
}
