import { useState, useEffect, useContext } from "react";
import "./homePage.css";
import { useLocation } from "react-router-dom";
import AllPosts from "../AllPosts";
export default function HomePage() {
  const [posts, setPosts] = useState([{ title: "Not found" }]);
  const { search } = useLocation();
 
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">WRITE YOUR THOUGHTS</span>
          <span className="headerTitleLg">The Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="home">
        {/* <AllPosts posts={posts} /> */}
      </div>
    </>
  );
}
