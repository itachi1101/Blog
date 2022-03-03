import "./login.styles.scss";
import LoginImg from "../../Images/login.gif";
export default function Login() {
  return (
    <div className="login-Container">
      <div className="login-Left">
        <img src={LoginImg} />
      </div>
      <div className="login-Right">
        <div className="login-rightWrapper">
          <h1>LOGIN</h1>
          <form>
            <div className="login-inputWrapper">
              <label>EMAIL</label>
              <input type="email" placeholder="email@something.com" required />
            </div>
            <div className="login-inputWrapper">
              <label>PASSWORD</label>
              <input type="password" placeholder="*****" required />
            </div>
            <span>
              Don't have an account? <span>Create Account</span>
            </span>
            <div className="login-button-wrapper">
              <button className="login-button" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
