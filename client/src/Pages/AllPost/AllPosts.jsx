import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Post from "../Posts/Post";
import { Context } from "../../context/Context";
import { CircularProgress } from "@mui/material";
import './AllPosts.styles.scss'
export default function AllPosts({ posts, loading }) {
  const [likedarray, setLikedArray] = useState([]);
  const { token } = useContext(Context);
  const history = useHistory()
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
  }, [history]);
  return (

    <div className="allPostContainer">
      {
        loading ? <CircularProgress style={{width:"200px",height:"200px"}}></CircularProgress> :
          posts.map((post) => (
            <Post
              post={post}
              key={post.title}
              isLiked={likedarray.indexOf(post.title) !== -1}
            />
          ))}

    </div>
  );
}
