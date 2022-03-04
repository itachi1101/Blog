import "./signup.styles.scss";
import SignupImg from "../../Images/Signup.gif";
export default function Signup() {
  return (
    <div className="signup-Container">
      <div className="signup-Left">
        <img src={SignupImg} />
      </div>
      <div className="signup-Right">
        <div className="signup-rightWrapper">
          <h1>REGISTER</h1>
          <form>
            <div className="signup-inputWrapper">
              <label>Name</label>
              <input placeholder="Joe Smith" required />
            </div>
            <div className="signup-inputWrapper">
              <label>EMAIL</label>
              <input type="email" placeholder="email@something.com" required />
            </div>
            <div className="signup-inputWrapper">
              <label>PASSWORD</label>
              <input type="password" placeholder="*****" required />
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
