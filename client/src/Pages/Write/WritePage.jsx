import "./write.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import {useHistory} from 'react-router-dom'
export default function WritePage() {
  const titleRef = useRef();
  const history=useHistory()
  const descRef = useRef();
    return (
    <div className="write" style={{ marginTop: "60px" }}>
      <img className="writeImg" alt="" />

      <form className="writeForm" >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
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
