import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Post from "./Post";
import { Context } from "../context/Context";
export default function AllPosts({ posts, loading }) {
  const [likedarray, setLikedArray] = useState([]);
  const { token } = useContext(Context);
  useEffect(() => {
    const fetchLikedPosts = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const result = await axios.get(
          "http://localhost:5000/api/user/getlikedposts/",
          config
        );

        setLikedArray(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLikedPosts();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
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
