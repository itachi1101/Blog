import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./homePage.css";
import AllPosts from "../AllPosts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./homePage.css";
import { Context } from "../../context/Context";
import background from "../../Photo/background.jpg";
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(Context);
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
        <img className="headerImg" src={background} alt="" />
        <div className="headerTitles">
          <span className="headerTitleSm">WRITE YOUR THOUGHTS</span>
          <span className="headerTitleLg">The Blog</span>
        </div>
      </div>
      <div className="home">
        <AllPosts posts={posts} loading={loading} />
        <Sidebar />
      </div>
    </>
  );
}
