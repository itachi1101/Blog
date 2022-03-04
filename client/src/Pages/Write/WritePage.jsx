import "./write.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlusCircle } from "react-icons/fa";
import { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
export default function WritePage() {
  const titleRef = useRef();
  const descRef = useRef();
  const [file, setFile] = useState(null);
  const history = useHistory();
  return (
    <div className="write" style={{ marginTop: "60px" }}>
      <img
        className="writeImg"
        src={
          "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        }
        alt=""
      />

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FaPlusCircle style={{ fontSize: "35px" }} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
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
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
