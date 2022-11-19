import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./homePage.css";
import AllPosts from "../AllPost/AllPosts";
import "./homePage.css";
import { Context } from "../../context/Context";
import background from "../../Photo/background.jpg";
import { Button } from "@mui/material";
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const { token } = useContext(Context);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/post/allposts?page=${pageNumber}`
      );

      setPosts(res.data.posts);
      setNumberOfPages(res.data.totalPages);
      setLoading(false);
    };
    fetchPosts();
  }, [pageNumber, token]);
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };
  return (
    <>
      <div className="header">
        <img className="headerImg" src={background} alt="" />
        <div className="headerTitles">
          <span className="headerTitleSm">WRITE YOUR THOUGHTS</span>
          <span className="headerTitleLg">

            <Typewriter
              options={{
                strings: ['The Blog'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
      <AllPosts posts={posts} loading={loading} />
      <div className="pagination-container">
        <Button variant="outlined" onClick={gotoPrevious}>
          Previous
        </Button>
        {pages.map((pageIndex) => (
          <Button
            variant="outlined"
            key={pageIndex}
            onClick={() => setPageNumber(pageIndex)}
          >
            {pageIndex + 1}
          </Button>
        ))}
        <Button variant="outlined" onClick={gotoNext}>
          Next
        </Button>
      </div>
    </>
  );
}
