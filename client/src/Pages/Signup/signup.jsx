import "./signup.styles.scss";
import SignupImg from "../../Images/Signup.gif";
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/api/signup", {
          username: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then(history.push("/login"))
        .catch((err) => console.log(err));
    } catch (err) {}
  };
  return (
    <div className="signup-Container">
      <div className="signup-Left">
        <img src={SignupImg} />
      </div>
      <div className="signup-Right">
        <div className="signup-rightWrapper">
          <h1>REGISTER</h1>
          <form onSubmit={handleSubmit}>
            <div className="signup-inputWrapper">
              <label>Name</label>
              <input placeholder="Joe Smith" ref={nameRef} required />
            </div>
            <div className="signup-inputWrapper">
              <label>EMAIL</label>
              <input
                type="email"
                ref={emailRef}
                placeholder="email@something.com"
                required
              />
            </div>
            <div className="signup-inputWrapper">
              <label>PASSWORD</label>
              <input
                type="password"
                placeholder="*****"
                ref={passwordRef}
                required
              />
            </div>
            <div className="signup-inputWrapper">
              <label>Upload Photo</label>
              <input type="file" placeholder=".jpg/jpeg" required />
            </div>
            <span>
              Creating an account means you're okay with our Terms of Service
              and our Privacy Policy
            </span>
            <div className="signup-button-wrapper">
              <button className="signup-button" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
