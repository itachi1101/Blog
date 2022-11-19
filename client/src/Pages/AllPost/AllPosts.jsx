import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Post from "../Posts/Post";
import { Context } from "../../context/Context";
import { CircularProgress } from "@mui/material";
import './AllPosts.styles.scss'
import HAd from '../../Photo/horizontalAd.jpg'
import VAd from '../../Photo/verticalAd.png'
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

    <div className="AllPost-container">
      <div className="heading">Blogs</div>
      <div className="wrapper">
        <div className="left">
          <div className="subheading">
            Ads
          </div>
          <img className="hAd" src={HAd} />
          <img className="vAd" src={VAd} />
        </div>
        <div className="right">

          {
            loading ? <div style={{ width: "700px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CircularProgress style={{ width: "200px", height: "200px" }}></CircularProgress>
            </div>

              :
              posts.map((post) => (
                <Post
                  post={post}
                  key={post.title}
                  isLiked={likedarray.indexOf(post.title) !== -1}
                />
              ))}

        </div>
      </div>
    </div>
  );
}
