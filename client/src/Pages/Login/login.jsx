import "./login.styles.scss";
import { useContext } from "react";
import LoginImg from "../../Images/login.gif";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Context } from "../../context/Context";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/login/", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      history.push("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      alert("INVALID CERDENTIALS");
    }
  };
  return (
    <div className="login-Container">
      <div className="login-Left">
        <img src={LoginImg} />
      </div>
      <div className="login-Right">
        <div className="login-rightWrapper">
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-inputWrapper">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="email@something.com"
                ref={emailRef}
                required
              />
            </div>
            <div className="login-inputWrapper">
              <label>PASSWORD</label>
              <input
                type="password"
                placeholder="*****"
                ref={passwordRef}
                required
              />
            </div>
            <span>
              Don't have an account?{" "}
              <span>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Create Account
                </Link>
              </span>
            </span>
            <div className="login-button-wrapper">
              <button
                className="login-button"
                type="submit"
                disabled={isFetching}
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
