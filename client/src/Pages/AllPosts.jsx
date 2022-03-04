import { useEffect, useState } from "react";
import { useHistory,useLocation } from "react-router-dom";
import axios from "axios";
import Post from "./Post";
export default function AllPosts({ posts }) {
  const [likedarray, setLikedArray] = useState([]);
  const history = useHistory();
  let temp = [];
  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const data = await axios.post(
          "http://localhost:5000/api/user/getlikedposts/",
          {
            username: "monkey1",
          }
        );
        data.data.data.map((post) => {
          temp.push(post.title);
        });
        setLikedArray(temp);
      } catch (err) {}
    };
    fetchLikedPosts();
  }, [history]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post) => (
        <Post
          post={post}
          key={post.title}
          isLiked={likedarray.indexOf(post.title) != -1}
        />
      ))}
    </div>
  );
}
