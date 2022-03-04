import "./write.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlusCircle } from "react-icons/fa";
import { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function WritePage() {
  const titleRef = useRef();
  const descRef = useRef();
  const [file, setFile] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      description: descRef.current.value,
      author: "monkey1",
      isPrivate: isPrivate,
    };
    axios
      .post("http://localhost:5000/api/post/create/", newPost)
      .then(history.push("/"))
      .catch((err) => console.log(err));
  };
  console.log(isPrivate);
  return (
    <div className="write" style={{ marginTop: "60px" }}>
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
          <label htmlFor="fileInput">
            <FaPlusCircle style={{ fontSize: "35px" }} />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            ref={titleRef}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            ref={descRef}
          ></textarea>
        </div>
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
      </form>
    </div>
  );
}
