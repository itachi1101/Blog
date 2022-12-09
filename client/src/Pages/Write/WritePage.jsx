import "./write.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlusCircle } from "react-icons/fa";
import { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";
import HeaderNew from "../../Components/Header/Header";
import FooterNew from '../../Components/FooterNew/FooterNew'
export default function WritePage() {
  const titleRef = useRef();
  const descRef = useRef();
  const [file, setFile] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const history = useHistory();
  const { token } = useContext(Context);
  const defaultFileName = "/uploads/defaultPost.jpg";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", titleRef.current.value);
    data.append("description", descRef.current.value);
    data.append("isPrivate", isPrivate);
    if (file) {
      data.append("pic", file);
    } else {
      data.append("pic", defaultFileName);
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .post("http://localhost:5000/api/post/create/", data, config)
      .then(() => {
        history.push("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <HeaderNew />
      <div className="write">
      <div className="horizontal-line"></div>
        {file ? (
          <img
            className="writeImg"
            src={URL.createObjectURL(file)}
            alt="uploaded photo"
          />
        ) : (
          <img
            className="writeImg"
            src={
              "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            }
            alt="default photo"
          />
        )}

        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <div className="photo-upload-container">
              <span>Upload Photo</span>
              <label htmlFor="fileInput">
                <FaPlusCircle style={{ fontSize: "35px", color: 'gray' }} />
              </label>
              <input
                type="file"
                id="fileInput"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <input
              type="text"
              placeholder="Title goes here..."
              autoFocus={true}
              ref={titleRef}
            />
          </div>
          <div className="write-text-area">
            <textarea
              placeholder="Tell your story..."
              type="text"
              ref={descRef}
            ></textarea>
          </div>
          <div className="write-btn-container">

            <button
              className="writeSubmitprivate"
              type="submit"
              onClick={() => setIsPrivate(true)}
            >
              Publish as Private Post
            </button>
            <button
              className="writeSubmitpublic"
              type="submit"
              onClick={() => setIsPrivate(false)}
            >
              Publish as Public Post
            </button>
          </div>
        </form>
        <div className="horizontal-line"></div>
      </div>
      <FooterNew />
    </>
  );
}
