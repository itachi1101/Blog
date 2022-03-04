import { useContext, useEffect, useState } from "react";
import "../Pages/HomePage/homePage.css";
import AllPosts from "./AllPosts";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
export default function MyPosts() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const history = useHistory();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.post(`http://localhost:5000/api/post/myposts/`, {
        author: "monkey1",
      });
      console.log(res);
      setPosts(res.data.data);
    };
    fetchPosts();
  }, [history]);
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Personal</span>
          <span className="headerTitleLg">Blogs</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1530910417612-701222d79f2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div className="home">
        <AllPosts posts={posts} />
      </div>
    </>
  );
}
