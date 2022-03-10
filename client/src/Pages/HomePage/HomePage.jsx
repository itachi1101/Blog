import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./homePage.css";
import AllPosts from "../AllPosts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./homePage.css";
import { Context } from "../../context/Context";
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {token}=useContext(Context)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/post/allposts/");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [token]);

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
        <AllPosts posts={posts} loading={loading} />
        <Sidebar/>
      </div>
    </>
  );
}
