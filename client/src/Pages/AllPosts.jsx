import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Post from "./Post";
import { Context } from "../context/Context";
export default function AllPosts({ posts }) {
  const [likedarray, setLikedArray] = useState([]);
  const history = useHistory();
  const { user } = useContext(Context);
  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const result = await axios.post(
          "http://localhost:5000/api/user/getlikedposts/",
          { username: user.user.username }
        );

        setLikedArray(result.data.data);
      } catch (err) {
        console.log(err);
      }
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
